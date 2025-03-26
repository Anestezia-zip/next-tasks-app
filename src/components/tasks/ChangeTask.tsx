"use client"

import React from 'react'
import Form from '../form/Form'
import Button from '../button/Button'
import * as actions from '@/actions'
import { taskProps } from '@/types'
import Input from '../input/Input'
import Switch from '../switch/Switch'

const ChangeTask = ({ task, setEditTaskState }: { task: taskProps, setEditTaskState: (state: boolean) => void }) => {
    return (
        <Form action={actions.changeStatus} onSubmit={() => setEditTaskState(false)}>
            <Input name="inputId" value={task.id} type="hidden" />
            <Button text={<Switch task={task} />} type='submit' className='w-12 rounded-full' actionBtn bgColor={task.isCompleted ? 'bg-teal-600' : 'bg-white'} />
        </Form>
    )
}

export default ChangeTask