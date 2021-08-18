import React, { FunctionComponent } from 'react';

type QuestionProps = {
  question: string;
};

const Question: FunctionComponent<QuestionProps> = ({ question }) => <p>{question}</p>;

export default Question;
