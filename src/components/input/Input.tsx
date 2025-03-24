import { inputProps } from '@/types'
import React from 'react'

const Input = ({ name, type, placeholder, value }: inputProps) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            className="block w-full p-3 py-2.5 rounded-lg text-base bg-[#E8F0FE] focus:outline-none placeholder-black/50"
        />
    )
}

export default Input