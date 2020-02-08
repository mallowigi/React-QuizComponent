import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  render() {
    const { answer_options } = this.props.quiz_question;
    const { instruction_text } = this.props.quiz_question;
    return (
      <main>
        <section>
          <p>{instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <QuizQuestionButton button_text={answer_options[0]}></QuizQuestionButton>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
