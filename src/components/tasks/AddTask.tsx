"use client"

import React, { FormEvent, useState } from 'react'
import Form from '../form/Form'
import Input from '../input/Input'
import Button from '../button/Button'
import * as actions from '@/actions'

const AddTask = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!inputValue.trim()) {
      e.preventDefault();
      setError("Field can't be empty")
      return
    }
    setError('')
    setInputValue('')
  }

  return (
    <Form action={actions.createTask} onSubmit={handleSubmit as () => void}>
      <div className="flex gap-4 items-center">
        <Input name="input" type="text" value={inputValue} placeholder="Add task here..." className='p-3 py-2.5' onChange={(e) => setInputValue(e.target.value)} />
        <Button type="submit" text="+" bgColor="bg-green-600 text-white" className='px-2.5 rounded-full active:scale-110' />
      </div>
      {error && <p className="text-red-500/90 p-1 text-sm">{error}</p>}
    </Form>
  )
}

export default AddTask