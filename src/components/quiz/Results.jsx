import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';


class Results extends Component{
   render(){
       var percent = (this.props.score / this.props.questions.length * 100);
       if (percent > 80){
           var message = 'Good Job!';
       } else if (percent < 80 && percent > 60){
           var message = 'You Did Ok!';
       } else {
           var message = 'You Did Horrible!';
       }
        return(
            <div className="well">
                <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
                <h1>{percent}%  - {message}</h1>
                <hr />
                <a href="/app">Take Again?</a>
            </div>
        )
    }
}

export default Results