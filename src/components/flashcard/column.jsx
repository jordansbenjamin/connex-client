import React from 'react'
import Card from './card'



function Column({tasks}) {
  return (
    <div className='h-10 w-10'>
        {tasks.map((task) => (
            <Card key={task.id} id={task.id} title={task.title}>
                
            </Card>
        )

        )}
    </div>
  )
}

export default Column
