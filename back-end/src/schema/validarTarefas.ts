import z from "zod";

export const tarefasSchema = z.object({
    tarefas: z.string().min(1)
})

export const tarefasConcluidasSchema = z.object({
    concluida: z.boolean()
})