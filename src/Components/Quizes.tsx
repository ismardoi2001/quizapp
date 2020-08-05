import React from 'react';
import {Container, Row, Col, Button, Card, CardTitle, CardText, CardImg } from 'reactstrap';
import {Link} from 'react-router-dom';

const q1 = require("./../svg/quiz_easy.svg") as string;
const q2 = require("./../svg/quiz_medium.svg") as string;
const q3 = require("./../svg/quiz_hard.svg") as string;
function Quizes() {
    return (
        <>
        <Container id='quizes'>
          <Row>
            <Col className='maint mb-5 text-center'><h1>REACT.NATIVE QUIZ</h1></Col>
          </Row>
        <Row className='text-center'>
        <Col sm="4" lg="4">
          <Card body className='cardAnim'>
            <div className='bgShape1'>
              <CardImg top width="100%" src={q1} alt="Card image cap" />
            </div>
            <CardTitle style={{fontSize: "30px", textAlign: "center"}}>Step 1</CardTitle>
            <CardText style={{textAlign: "center", minHeight:'120px'}}>Easy step 1, for the students ! Pass and get your Certificate !</CardText>
            <Link to='/easy'><Button inverse color="warning">Start Easy</Button></Link>
          </Card>
        </Col>
        <Col sm="4" lg="4">
          <Card body className='cardAnim' >
          <div className='bgShape2'>
              <CardImg top width="100%" src={q2} alt="Card image cap" />
            </div>            
            <CardTitle style={{fontSize: "30px", textAlign: "center"}}>Step 2</CardTitle>
            <CardText style={{textAlign: "center", minHeight:'120px'}}>Medium step 2 for the intermediate users! Can you earn a certificate ?</CardText>
            <Link to='/medium'><Button inverse color="success">Start Medium</Button></Link>
          </Card>
        </Col>
        <Col sm="4" lg="4" >
          <Card body className='cardAnim'>
          <div className='bgShape3'>
              <CardImg top width="100%" src={q3} alt="Card image cap" />
            </div>            
            <CardTitle style={{fontSize: "30px", textAlign: "center"}}>Step 3</CardTitle>
            <CardText style={{textAlign: "center", minHeight:'120px'}}>Master step 3, for the Professional . Can you earn a certificate ? ?</CardText>
            <Link to='/hard'><Button inverse color="danger">Start Hard</Button></Link>
          </Card>
        </Col>
      </Row>
      </Container>            
        </>
    )
}

export default Quizes
