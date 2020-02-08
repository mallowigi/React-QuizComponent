import React, { Component } from 'react';

const quizData = require('./quiz_data.json');

class Quiz extends Component {
  state = {
    quiz_position: 1,
  };

  constructor(props) {
    super(props);
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
