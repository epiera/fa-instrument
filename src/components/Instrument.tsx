import * as React from 'react';
import './Instrument.css';

import FiBox from '../assets/imgs/fi_box.svg';
import VerticalMechanics from '../assets/imgs/vertical_mechanics.svg';
import FiNeedle from '../assets/imgs/fi_needle.svg';

export interface Props {
    name: string;
    vario?: number;
}

interface State {
    currentVario: number;
    increment: number;
}



export class Instrument extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { currentVario: props.vario || -5 , increment: 0};
    }

    componentDidMount() {
        setInterval(() => {
            this.updateVario(this.state.currentVario, this.state.increment)
        }, 50)
    }

    render() {

        const { name} = this.props;
        let styles = { 
            transform: 'rotate(' + this.state.currentVario + 'deg)'
        };

        return (
            <div>
            <div className="instrument vario">
                <img src={FiBox} className="background box" alt="" />
                <img src={VerticalMechanics} className="box" alt="" />
                <div className="vario box" style={styles}>
                    <img src={FiNeedle}  className="box"  alt="" />
                </div>
                x
            </div>
            <div>{name}</div>
            </div>

        )
    }

    
    updateVario(currentVario: number, increment: number) {
        console.log(currentVario, increment);
        let vario_bound = 1.95;
        
        increment++;

        currentVario = 2*Math.sin(increment/10);


        if (currentVario > vario_bound) {
            currentVario = vario_bound;
        } else if (currentVario < -vario_bound) {
            currentVario = -vario_bound;
        }
        currentVario = currentVario * 90;

        console.log(currentVario);

        this.setState({ currentVario , increment});

    }

}

export default Instrument;


