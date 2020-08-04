import React from 'react';
// Componets
import QuestionCard from './Components/QuestionCard';
function App() {

  const startIrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  
  const nextQuestion =() => {

  }
  return (
   <div className="App">
     <h1>REACT.NATIVE QUIZ</h1>
     <button className="start" onClick={startIrivia}>
       Start
     </button>
     <p className="Score">Score:</p>
     <p>Loading Question ...</p>
     <QuestionCard />
     <button className="next" onClick={nextQuestion}>
       Next Question
     </button>
     </div>
     );
 }

 export default App;
