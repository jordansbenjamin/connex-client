import React from 'react'
// import Flashcard from '@/components/flashcard'
import Flashcard from '../../components/flashcard'


function page() {

  const dummy = [
    {
      id:1,
      title:"test title1",
      content: " test content1 "
    },
    { 
      id:2,
      title:"test title2",
      content: " test content2"
    },
    { 
      id:3,
      title:"test title 3",
      content: " test content 3"
    },
    { 
      id:4,
      title:"test title 4",
      content: " test content 4"
    }
  ]


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
