import { ReactNode } from "react";

export interface inputProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface formProps {
    children: ReactNode;
    action: (formData: FormData) => void;
    className?: string;
    onSubmit?: () => void;
}

export interface buttonProps {
    type?: "button" | "submit" | "reset";
    text: string | ReactNode;
    onClick?: () => void;
    actionBtn?: boolean;
    bgColor?: string;
    className?: string;
}


export interface taskProps {
    id: string;
    title?: string | null;
    isCompleted: boolean;
    createdAt?: Date;
}