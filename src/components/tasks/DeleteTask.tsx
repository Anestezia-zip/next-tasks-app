import React from 'react'
import Form from '../form/Form'
import Button from '../button/Button'
import { taskProps } from '@/types'
import { FaTrash } from 'react-icons/fa'
import * as actions from '@/actions'
import Input from '../input/Input'


const DeleteTask = ({ task, setEditTaskState }: { task: taskProps, setEditTaskState: (state: boolean) => void }) => {
    return (
        <Form action={actions.deleteTask} onSubmit={() => setEditTaskState(false)}>
            <Input type='hidden' name="inputId" value={task.id} />
            <Button type='submit' text={<FaTrash />} actionBtn bgColor='text-lg p-2 rounded text-red-400' className='active:scale-110' />
        </Form>
    )
}

export default DeleteTask