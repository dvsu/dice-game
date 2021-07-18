import React, { Component } from 'react';
import './Dice.css';
import 'csshake';


class Dice extends Component {

    render() {
        return(
            <div class={(this.props.rolling)? "shake-chunk shake-constant" : ""}>
                <i class={`Dice fas fa-dice${(this.props.diceNumber === '')? '': '-'}${this.props.diceNumber}`}></i>
            </div>
            
        );
    }
}

export default Dice