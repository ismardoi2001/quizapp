  import React from 'react';
  type props  = {
    qestion: string;
    answers :  string[];
    callback : any;
    userAnwser : boolean;
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
}) => (
<div>
    <p className="number">
        Question:{questionNr} /{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML ={{__html:question}}/>
    <div>
    {answers.map{answer =>(
    <div>
        <button disabled={userAnswers}
        </div>
    )}}
    </div>
</div>
);

export default QuestionCard;