import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component {

    constructor(props){
        super(props);
        this.state = {
            diceOne: 'one', 
            diceTwo: 'two', 
            diceThree: 'three',
            isRolling: false
        };
        this.roll = this.roll.bind(this);
    }

    static defaultProps = {
        diceNumber: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    
    generateDiceNumber() {
        return this.props.diceNumber[Math.floor(Math.random() * this.props.diceNumber.length)]
    }

    roll(e) {
        this.setState({
            diceOne: '', 
            diceTwo: '', 
            diceThree: '',
            isRolling: true
        });

        setTimeout(() => {
            this.setState({
                diceOne: this.generateDiceNumber(), 
                diceTwo: this.generateDiceNumber(), 
                diceThree: this.generateDiceNumber(),
                isRolling: false})
        }, 1000);
    }


    render() {
        return (
            <div>
                {(this.state.isRolling) 
                ? <div className="RollDice">
                    <Dice diceNumber={this.state.diceTwo} rolling={this.state.isRolling}/>
                </div> 
                : <div className="RollDice">
                    <Dice diceNumber={this.state.diceOne} rolling={this.state.isRolling}/>
                    <Dice diceNumber={this.state.diceTwo} rolling={this.state.isRolling}/>
                    <Dice diceNumber={this.state.diceThree} rolling={this.state.isRolling}/>
                </div>}
                
                <button 
                    className="RollDice-button" 
                    disabled={this.state.isRolling} 
                    onClick={this.roll}>{this.state.isRolling? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    }
}


export default RollDice;