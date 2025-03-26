"use client"

import { formProps } from '@/types'
import React, { useRef } from 'react'

const Form = ({ children, action, className, onSubmit }: formProps) => {
    const ref = useRef<HTMLFormElement>(null)
    return (
        <form
            className={className}
            action={async (formData) => {
                await action(formData);
                ref.current?.reset();
            }}
            onSubmit={onSubmit}
            ref={ref}>
            {children}
        </form>
    )
}

export default Form