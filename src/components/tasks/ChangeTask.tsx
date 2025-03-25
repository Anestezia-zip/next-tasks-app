import React from 'react'
import Form from '../form/Form'
import Button from '../button/Button'
import * as actions from '@/actions'
import { taskProps } from '@/types'
import { FaCheck } from 'react-icons/fa'
import Input from '../input/Input'
import Switch from '../switch/Switch'

const ChangeTask = ({ task }: { task: taskProps }) => {
    return (
        <Form action={actions.changeStatus}>
            <Input name="inputId" value={task.id} type="hidden" />
            <Button text={<Switch task={task}/>} type='submit' className='w-12' actionBtn bgColor={task.isCompleted ? 'bg-teal-600' : 'bg-white'} />
        </Form>
    )
}

export default ChangeTask