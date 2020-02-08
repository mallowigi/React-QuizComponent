import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    };
  }

  render() {
    const { quiz_position } = this.state;
    return (
      <QuizQuestion
        className="QuizQuestion"
        quiz_question={quizData.quiz_questions[quiz_position - 1]}></QuizQuestion>
    );
  }
}

export default Quiz;
