import axios from "axios";
import { useEffect, useState } from "react";
import { ShuffleArray } from "../../component/Math/ShuffleArray";
export type Question={
    categry:string,
    correct_answer:string,
    difficulty :string,
    incorrect_answers:string[],
    question:string,
    type:string
}
export type  QuestionState=Question & {
answers:string[]
}

export enum Difficulty{
    EASY='easy',
    MEDIUM='medium',
    HARD ='hard'


}


export const FetchQuizQuestion=async (amount :number ,difficulty:Difficulty) =>{
    const endPoint=`https://opentdb.com/api.php?amount=${amount}&Difficulty=${Difficulty}&type=multiple`;
    const fetch_data=await fetch(endPoint)
    const data=await fetch_data.json()
    console.log(data)
    // useEffect(()=> {
    //     axios.get(endPoint)
    //     .then(function (response) {
    //       // handle success
    //       console.log(response);
          
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    //     .finally(function () {
    //       // always executed
    //     });
    //   },[])
    return (
        data.results.map((question :Question) => (
  
            {
                ...question,
                answers: ShuffleArray([...question.incorrect_answers, question.correct_answer])
            }
        
              
        )
            )
    )

}