import React, { useState } from 'react'
import Card from './Card';
import { useDrop } from 'react-dnd';

const CardList = [
  {
    id: 1,
    title: 'Test'
  },
  {
    id: 2,
    title: 'Second'
  },
  {
    id: 3,
    title: 'Third'
  }
]

function DragDrop() {

  const [board, setBoard] = useState([]);

  const [{isOver}, drop] = useDrop(() => ({
    accept: 'Task',
    drop: (item) => addTaskToBoard(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }));

  const addTaskToBoard = (id) => {
    const cardList = CardList.filter((card) => id === card.id)
    setBoard((prevBoard) => [...prevBoard, cardList[0]]);
  }

  return (
    <>
    <div className='pictures'>{CardList.map((card) => {
      return (
        <Card id={card.id} title={card.title} key={card.id}/>
      )
    })}</div>
    <div className='board' ref={drop}>{board.map((card) => {
      return (
        <Card id={card.id} title={card.title} key={card.id}/>
      )
    })}</div>
    </>
  )
}

export default DragDrop;