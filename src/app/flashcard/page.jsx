'use client'

import React from 'react'
// import Flashcard from '@/components/flashcard'
import Flashcard from '../../components/flashcard'


function page() {

  // const dummy = [
  //   {
  //     id:1,
  //     title:"Maccas",
  //     content: "McDonald"
  //   },
  //   { 
  //     id:2,
  //     title:"Smash some frothies",
  //     content: "Drink beers"
  //   },
  //   { 
  //     id:3,
  //     title:"what is the definition of machine learning",
  //     content: " Machine learning is a subset of artificial intelligence (AI) that focuses on the development of algorithms and statistical models that enable computers to perform tasks without being explicitly programmed for those tasks. Instead of relying on explicit instructions, machine learning algorithms learn patterns and make predictions or decisions based on data. The process involves training the algorithms on labeled or unlabeled data, allowing them to learn from experience and improve their performance over time. Machine learning is used in various applications such as image recognition, natural language processing, recommendation systems, medical diagnosis, and financial forecasting."
  //   },
  //   { 
  //     id:4,
  //     title:"test title 4",
  //     content: " test content 4"
  //   }
  // ]

  const dummy = JSON.parse(localStorage.getItem('ai_response'))
  


  return (
    <div className='grid gap-4 grid-cols-3 grid-rows-3'>
        
        {
          dummy.map((item) => (
            <Flashcard 
              key={item.id}
              id={item.id}
              title={item.title} 
              content={item.content}>

            </Flashcard>
          ))
        }
    </div>
  )
}

export default page
