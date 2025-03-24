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