"use client"

import { taskProps } from '@/types'
import React, { useState } from 'react'
import ChangeTask from './ChangeTask'
import EditTask from './EditTask'
import DeleteTask from './DeleteTask'

const Task = ({ task }: { task: taskProps }) => {
  const [editTaskState, setEditTaskState] = useState(false)

  const taskDecoration = {
    textDecoration: task.isCompleted ? 'line-through' : 'none',
  }

  return (
    <div className='flex justify-between items-center gap-4 border-b-[1px]' style={taskDecoration}>
      <ChangeTask task={task} setEditTaskState={setEditTaskState} />
        <span className="font-bold" style={{opacity: task.isCompleted ? 0.5 : 1}}>{task.title}</span>
      <div className='flex justify-between items-center gap-8'>
        <div className='flex items-center' style={{opacity: task.isCompleted ? 0.5 : 1}}>
          <EditTask task={task} editTaskState={editTaskState} setEditTaskState={setEditTaskState} />
          <DeleteTask task={task} />
        </div>
      </div>
    </div>
  )
}

export default Task