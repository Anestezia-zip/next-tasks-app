"use client"

import React, { FormEvent, useState } from 'react'
import Button from '../button/Button'
import { MdDelete, MdEdit } from 'react-icons/md'
import { taskProps } from '@/types'
import Form from '../form/Form'
import Input from '../input/Input'
import * as actions from '@/actions'


const EditTask = ({ task, editTaskState, setEditTaskState }: { task: taskProps, editTaskState: boolean, setEditTaskState: (state: boolean) => void }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleEdit = () => {
        if (task.isCompleted) return;
        setEditTaskState(!editTaskState)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        if (!inputValue.trim()) {
            e.preventDefault();
            setError("Field can't be empty")
            return
        }
        setError('')
        setEditTaskState(false)
        setInputValue('')
    }

    return (
        <div className='flex p-1'>
            <Button onClick={handleEdit} className='rounded active:scale-110' text={<MdEdit className='p-1 text-black' />} actionBtn />
            {editTaskState ? (
                <Form action={actions.editTask} onSubmit={handleSubmit as () => void}>
                    <Input name='inputId' value={task.id} type='hidden' />
                    <div className='flex items-center gap-2'>
                        <Input type="text" name="newTitle" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder={error ? "Field can't be empty" : 'Edit task...'} className='p-1 px-3 min-w-44' />
                        <Button type='submit' text='Save' className='text-lg bg-amber-300 h-fit p-0.5 px-2.5 rounded-lg' />
                    </div>
                </Form>
            ) : null}
        </div>
    )
}

export default EditTask