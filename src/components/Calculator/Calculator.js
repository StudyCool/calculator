import React, {Component} from 'react';
import Display from '../Display';
import Logic from '../Logic';
class Calculator extends Component {
  constructor (props) {
    super(props);
      this.state = {
        operand1:'',
        operand2:'',
        operator: null,
      };
    }

    onEqualClickHandler = () =>{
    this.setState({
      result: result
    })
    }
    render () {
return(
    <div>
      <Display/>
      <Logic/>
    </div>

)
    }
  }

export default Calculator;