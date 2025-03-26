"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export const createTask = async (formData: FormData) => {
    const input = formData.get('input') as string;
    if (!input.trim()) {
        return
    }

    await prisma.task.create({
        data: {
            title: input,
        }
    })

    revalidatePath('/')
}

export const changeStatus = async (formData: FormData) => {
    const inputId = formData.get('inputId') as string;
    const task = await prisma.task.findUnique({
        where: {
            id: inputId,
        }
    })

    const updatedStatus = !task?.isCompleted;

    await prisma.task.update({
        where: {
            id: inputId,
        },
        data: {
            isCompleted: updatedStatus,
        }
    })

    revalidatePath('/')
}

export const editTask = async (formData: FormData) => {
    const inputId = formData.get('inputId') as string;
    const newTitle = formData.get('newTitle') as string;

    await prisma.task.update({
        where: {
            id: inputId,
        },
        data: {
            title: newTitle,
        }
    })

    revalidatePath('/')
}

export const deleteTask = async (formData: FormData) => {
    const inputId = formData.get('inputId') as string;
    await prisma.task.delete({
        where: {
            id: inputId,
        }
    })

    revalidatePath('/')
}