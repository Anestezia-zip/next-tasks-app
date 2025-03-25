import { taskProps } from '@/types'
import React from 'react'
import ChangeTask from './ChangeTask'

const Task = ({ task }: { task: taskProps }) => {
  return (
    <div className='flex gap-2'>
      <ChangeTask task={task} />
      <span className="font-bold">{task.title}</span>
      <div className="flex items-center mx-2">
        {/* <EditTask task={task} /> */}
      </div>

      <div className="flex items-center">
        {/* <DeleteTask task={task} /> */}
      </div>
    </div>
  )
}

export default Task