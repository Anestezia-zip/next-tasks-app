import { inputProps } from '@/types'
import React from 'react'

const Input = ({ name, type, placeholder, value, onChange, className }: inputProps) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`block w-full rounded-lg text-base bg-[#E8F0FE] focus:outline-none placeholder-black/50 ${className}`}
        />
    )
}

export default Input