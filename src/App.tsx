import { useState } from 'react'
import './App.css'
// component
import QuestionCard from './Pages/QuestionCard/QuestionCard'
// type
import {Difficulty, FetchQuizQuestion,QuestionState} from './API/QuestionCard/QuestionCardApi'
import { Button, Text } from '@radix-ui/themes'

export type AnswerObject={
  answer:string,
  correctAnswer:string,
  correct:boolean,
  question:string

}

function App() {
  const TOTAL_QUESTION=10
const [loading,setLoading]=useState(false)
const [questions,setquestions]=useState<QuestionState[]>([])
const [number,setnumber]=useState(0)
const [userAnswrs,setuserAnswrs]=useState<AnswerObject[]>([])
const [score,setscore]=useState(0)
const [gameover,setgameover]=useState(true)
// console.log(FetchQuizQuestion(TOTAL_QUESTION,Difficulty.EASY))



  const  startTrivia =async () =>
  {
    setLoading(true)
    setgameover(false)
    const newQuestions= await FetchQuizQuestion(TOTAL_QUESTION,Difficulty.EASY)
  
    setquestions(newQuestions)
    setscore(0)
    setuserAnswrs([])
    setnumber(0)
    setLoading(false)



  }

  const checkAnswer =( e : React.MouseEvent<HTMLButtonElement>) =>{
    if(!gameover){
      // answer 
      const answer=e.currentTarget.value
      console.log(answer)
      // correct answer true or faluse
      const correct=answer === questions[number].correct_answer
     if(correct){
      setscore(prv => prv +1)
     }
     const answerobject={
      answer:answer,
      correctAnswer:questions[number].correct_answer,
      correct:correct,
      question:questions[number].question
     }
     setuserAnswrs((prev)=> [...prev,answerobject])

    }


  }
  const nextQuestion  = () => {
    let nextQuestionNr=number+1
     if(nextQuestionNr === questions.length ){
      setgameover(true)

     }
     else{
      setnumber(nextQuestionNr)
     }    
  }
 



  return (
    <div>
      <Text className='text-red-500 text-2xl'>React Quiz App</Text>
      {gameover|| userAnswrs.length===TOTAL_QUESTION ? <button  className='bg-slate-950 text-white p-2 block mx-auto mt-2 rounded-md shadow-md' onClick={startTrivia}>Start</button> : null }
      
      {!gameover   ? <p>Score : {score} </p> : null}
     { loading ?  <p>Loading Questions ...</p> : null}
    {!loading && !gameover && (
        <QuestionCard
        guestionNr={number +1}
        totalQuestions={TOTAL_QUESTION}
        question={questions[number].question ?questions[number].question:'nn' }
        answers={questions[number].answers}
        userAnswer={ userAnswrs[number]}
        callback={checkAnswer}
        />
    )}
      { !loading &&!gameover && userAnswrs.length===number + 1 &&  number !==TOTAL_QUESTION -1 &&(
        <button className='bg-green-600 mt-10 text-white py-2 px-2 rounded-md shadow-md' onClick={nextQuestion}>next Question </button>
      )}


   
    </div>
  )
}

export default App
