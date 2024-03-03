import React from 'react'
import { useDraggable } from '@dnd-kit/core'

function Card({id, title}) {

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id:id
  })

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      card: title {title}
    </button>
  )
}

export default Card
