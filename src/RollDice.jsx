import React,{Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides : ["one","two","three","four","five","six"]
    };
    constructor(props){
        super(props);
        this.state = {
            Die1 : "one",
            Die2 : "one",
            isRolling : false
        }
        this.roll = this.roll.bind(this);
    }
    roll(){
        //pick 2 new rolls
        let die1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        let die2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        //set state with the picked new roles
        this.setState({Die1:die1, Die2:die2, isRolling : true})
        //set timer to turn isRolling to false after 1 second
        setTimeout(() => {
            this.setState({isRolling : false})
        }, 1000);
    }
    render(){
        return (
            <div className = "RollDice">
                <div className = "RollDice-container">
                    <Die face = {this.state.Die1} rolling = {this.state.isRolling} />
                    <Die face = {this.state.Die2} rolling = {this.state.isRolling}/>
                </div>
                <button onClick = {this.roll} disabled = {this.state.isRolling}>
                    {this.state.isRolling ? "Rolling..." : "Roll Dice"}
                </button>
            </div>
        );
    }
}
export default RollDice;