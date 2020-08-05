export type Quiz = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
}

export type QuestionType = {
    question: string,
    answer: string,
    option: string[],
    correct_answer: string,
}

export type questonPropsTypes = {
    question: string,
    option: string[],
    callBack: (event: React.FormEvent<EventTarget>, answer:string)=>void
}

export type QuizInfoType = {
    level: string,
    questions: number
}

export type QuizCompletedType = {
    name: string,
    score: number,
    total: number,
    qType: string
}

export type CertificateType = {
    name: string,
    level: string
}
