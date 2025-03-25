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

    const updateStatus = !task?.isCompleted;

    await prisma.task.update({
        where: {
            id: inputId,
        },
        data: {
            isCompleted: updateStatus,
        }
    })

    revalidatePath('/')
}