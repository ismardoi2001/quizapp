import React,{useEffect, useState} from 'react'
import {Container, Row, Col} from 'reactstrap';
import {Badge, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {getQuizCollection} from './../Services/quiz-api';
import {QuestionType, QuizInfoType} from './../Types/quiz-types';
import QuestionCard from './QuestionCard';
import QuizCompleted from './QuizCompleted';
 
const loading = require("./../Images/giphy.webp") as string;

function Quiz(props:QuizInfoType) {
    const [quiz, setQuiz] = useState<QuestionType[]>([]);
    let [nextQuiz, setNextQuiz] = useState(0);
    let [score, setScore] = useState(0);
    const [name, setName] = useState('');
    const [cname, setCname] = useState('');
    const [quizEnd, setQuizEnd] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const questions:QuestionType[] = await getQuizCollection(props.questions,props.level);
            setQuiz(questions);
        } 

        fetchData();
    },[props.level,props.questions]);


    const handleNameChange = (event: any) => {
        setCname(event.target.value);
    }


    const handleSubmit = (event: React.FormEvent<EventTarget>, usrAns: string) => {
        event.preventDefault();

        if(usrAns === quiz[nextQuiz].answer){
            setScore(++score);
        }

        if(nextQuiz !== quiz.length-1){
            setNextQuiz(++nextQuiz);
        }
        else{
            // setScore(0);
            // setNextQuiz(0);
            setQuizEnd(true);
        }    
    }

    const handleNameSubmit = (event: any) =>{
        event.preventDefault();
        setName(cname);
        if(name !== ''){
            return true;
        }
    }

    const getColor = () =>{
        if(nextQuiz === 0){
            return 'secondary';
        }
        else{
            if((score / quiz.length)*100 < 70){
                return 'danger';
            }
            else {
                return 'success';
            }
        }
    }

    let img = require(`./../svg/quiz_${props.level}.svg`) as string;
    let quizType = props.level;

    if(!quiz.length){
        return (
            <div>
                <Container style={{minHeight:'100vh', marginTop:'10%'}}>
                    <Row className='text-center'>
                        <Col>
                            <img src={loading} alt='loading' className='w-50' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    else{
        return (
            <div>
            <Container style={{minHeight:'69vh'}}>
                    <Row>
                        <Col className='text-center'>
                            <h1 className='m-4'>Lets start the <span className={quizType}>{quizType}</span> Quiz.<br />Best of luck{' '+name}!</h1>
                            {(name !== '')?
                            <h4><Badge color={getColor()}>Your Score : {score}/{quiz.length}</Badge></h4>:null}
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-12 col-md-6 text-center  mt-3'>
                            <img src={img} alt={`${quizType} Quiz`}  style={{width:'60%'}}/>
                        </Col>
                        <Col className='col-12 col-md-6 mt-3'>
                            {(quizEnd)?
                                <QuizCompleted qType={quizType} name={name} score={score} total={props.questions} />:(
                            (name !== '')?
                            <QuestionCard 
                                option={quiz[nextQuiz].option} 
                                question={quiz[nextQuiz].question}
                                callBack={handleSubmit}
                            />:<Form className='mt-5' onSubmit={handleNameSubmit}>
                                    <FormGroup>
                                        <Label for="userName" className='m-3'>This name will be shown on Certificate.</Label>
                                        <Input 
                                            required 
                                            type="text" 
                                            className='w-50 m-3' 
                                            name="userName"
                                            onChange={handleNameChange}
                                            placeholder="Whats your good name ?" />
                                        <Button value='Submit' color="primary" className='m-3'>Start Quiz</Button>
                                    </FormGroup>
                                </Form>)}
                        </Col>                    
                    </Row>
            </Container> 
            </div>
        )
    }
}

export default Quiz;
