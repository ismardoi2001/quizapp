import {QuestionType, Quiz} from './../Types/quiz-types';

const arrayShuffle = (array: any[]) =>
    [...array].sort(()=>Math.random() - 0.5);

export const getQuizCollection = async(numQuest: number, level:string): Promise<QuestionType[]> => {
    const url = `https://opentdb.com/api.php?amount=${numQuest}&category=18&type=multiple&difficulty=${level}`;
    const res = await fetch(url);
    let {results} = await res.json();
    //console.log(results);
    const quiz:QuestionType[] = results.map((questionObj:Quiz)=>{
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: arrayShuffle(questionObj.incorrect_answers.concat(questionObj.correct_answer)), 
        }
    });
    return quiz;
}