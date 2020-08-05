import React, {useState} from 'react'
import {Button, Card, CardHeader, CardBody, CardText, CardFooter} from 'reactstrap';
import { questonPropsTypes } from './../Types/quiz-types';

const renderHTML = (rawHTML: string) => React.createElement("span", { dangerouslySetInnerHTML: { __html: rawHTML } });
const QuestionCard: React.FC<questonPropsTypes> = ({ question, option, callBack }) => {
    
let [userAnswer, setUserAnswer] = useState('');  

const answerSelected = (event: any) => {
    setUserAnswer(event.target.value);
}

    return (
        <>
            <div className="question-box text-left">
                <form onSubmit={(e:React.FormEvent<EventTarget>)=>callBack(e,userAnswer)}>
                <Card>
                    <CardHeader>{renderHTML(question)}</CardHeader>
                    <CardBody>
                        <CardText>
                            {option.map((opt: string, index: number) => {
                                return (
                                    <>
                                    <label key={index}>
                                        <input 
                                            required
                                            type='radio' 
                                            name='opt' 
                                            value={opt} 
                                            onChange={answerSelected} 
                                            checked={userAnswer === opt}/>&nbsp;
                                        {renderHTML(opt)}    
                                    </label>
                                    <br/>
                                    </>
                                )
                            })}                       
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <Button color="primary" className='w-25'> Next </Button>
                    </CardFooter>
                </Card>   
                </form>             
            </div>
        </>
    )
}


export default QuestionCard
