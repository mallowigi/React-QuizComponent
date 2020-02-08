import React, { Component } from 'react';

const quizData = require('./quiz_data.json');

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
      <div className="QuizQuestion">
        {quizData.quiz_questions[quiz_position].instruction_text}
      </div>
    );
  }
}

export default Quiz;
