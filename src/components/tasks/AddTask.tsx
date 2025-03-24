import React from 'react'
import Form from '../form/Form'
import Input from '../input/Input'
import Button from '../button/Button'
import { createTask } from '@/actions'

const AddTask = () => {
  return (
    <Form action={createTask}>
        <div className="flex gap-4 items-center">
          <Input name="input" type="text" placeholder="Add task here..." />
          <Button type="submit" text="+" bgColor="bg-green-600 text-white" />
        </div>
    </Form>
  )
}

export default AddTask