import { buttonProps } from '@/types'
import clsx from 'clsx'

const Button = ({ type, text, onClick, actionBtn, bgColor, ...props }: buttonProps) => {
    return (
        <button onClick={onClick} type={type} className={clsx(
            `${bgColor} hover:${bgColor} text-3xl ${props.className} focus:outline-none transition-all cursor-pointer`,
            actionBtn && `hover:bg-blue-300/30`
        )}>
            {text}
        </button>
    )
}

export default Button