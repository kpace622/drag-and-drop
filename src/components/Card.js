import React from 'react'
import { useDrag } from 'react-dnd';

function Card({ title, id }) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'Task',
    item: {id: id},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <div ref={drag}>
      <h2 style={{color: isDragging ? 'red' : 'black'}}>{title}</h2>
    </div>
  )
}

export default Card