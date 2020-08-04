  import React from 'react';
  type props  = {
    Question: string;
    answer :  string[];
    callback : any;
    userAnwser : string;
    questionNr: number;
    totalQuestions: number;
  }

const QuestionCard: React.FC <props>=() =>( 
<div>Question Card</div>
);

export default QuestionCard;