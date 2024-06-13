import React from 'react'
import { AnswerObject } from '../../App'
import { Flex, Text, Button } from '@radix-ui/themes';
type Props ={
  question:string,
  answers:string[],
  callback:(e : React.MouseEvent<HTMLButtonElement>) => void,
  userAnswer:AnswerObject,
  guestionNr:number,
  totalQuestions:number
}

const QuestionCard : React.FC<Props> = ({question,answers,callback,userAnswer,totalQuestions,guestionNr}) => {
  console.log(question)
  return (
    <div>
      <Text className='number'>
        Question :{guestionNr} / {totalQuestions}
      </Text>
      <p  dangerouslySetInnerHTML={{__html :question}} />   
        {/* {question} */}
        

      
    {answers?.map((answer)=>{
             return(
              <div key={answer} className='flex flex-col w-1/4 mx-auto mt-5 rounded-md shadow-md' >
              <Button disabled={userAnswer ? true : false} value={answer} onClick={callback} className='p-2 ' >
              <span dangerouslySetInnerHTML={{__html : answer}} className='  text-white cursor-pointer ' /> 
    
  
    
                </Button>
           
            </div>
    
             )
    })}

   
      
    </div>
  )
}

export default QuestionCard

