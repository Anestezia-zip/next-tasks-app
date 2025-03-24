import { buttonProps } from '@/types'
import clsx from 'clsx'

const Button = ({ type, text, onClick, actionBtn, bgColor, ...props }: buttonProps) => {
    return (
        <button onClick={onClick} type={type} className={clsx(
            `${bgColor} hover:${bgColor} text-3xl rounded-full px-2.5 flex items-center justify-center focus:outline-none transition-all active:scale-110 cursor-pointer`,
            actionBtn && "text-white hover:bg-blue-800 focus:ring-4"
        )}>
            {text}
        </button>
    )
}

export default Button