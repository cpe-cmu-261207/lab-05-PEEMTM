import { useState } from 'react'

type TaskProps = {
  id: number;
  name: string;
  doneFn: Function;
  deleteFn: Function; //Function type
  isDone: boolean
}

const Task = ({ id, name, doneFn, deleteFn, isDone }: TaskProps) => {
  let line = {}
  let visibility = {}
  if (isDone) {
    line = { textDecoration: 'line-through' }
    visibility = { visibility: 'hidden' }
  } else {
    line = {}
    visibility = { visibility: 'visible' }
  }

  return (
    <div className="flex justify-between h-8 items-center py-6 border-b">
      <span style={line} className="text-2xl"> {name} </span>
      <div style={visibility} className="flex space-x-1 items-center" >
        <button className="bg-green-400 w-24 text-2xl" onClick={() => doneFn(id)}>Done</button>
        <button className="bg-red-400 w-24 text-2xl" onClick={() => deleteFn(id)}>Delete</button>
      </div>
    </div>
  )
}

export default Task