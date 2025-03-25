import { taskProps } from '@/types'
import clsx from 'clsx'
import React from 'react'

const Switch = ({ task }: { task: taskProps }) => {
    return (
        <span
            className={clsx('w-6 h-6 bg-amber-200 rounded-full flex transition-transform duration-300',
                task.isCompleted ? "translate-x-full" : "translate-x-0")}>
        </span>
    )
}

export default Switch