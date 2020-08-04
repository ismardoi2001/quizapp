  import React from 'react';
  type props  = {
    qestion: string;
    answer :  string[];
    callback : any;
    userAnwser : string;
    questionNr: number;
    totalQuestions: number;
  };

  const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => <div>Question Card</div>;

export default QuestionCard;