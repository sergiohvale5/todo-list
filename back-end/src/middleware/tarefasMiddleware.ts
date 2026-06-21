import type {Request, Response, NextFunction} from "express";
import logger from "../logger/logger";
import { tarefasSchema, tarefasConcluidasSchema } from "../schema/validarTarefas";

export const tarefasMidlleware =  (req: Request, res: Response, next: NextFunction) => {
    logger.info("Iniciando processo de validação da tarefa...");

    const {tarefas} = req.body;

    const taredasValidas = tarefasSchema.safeParse({tarefas});

    if(!taredasValidas.success){
        logger.warn("Tarefa inválida");
        return res.status(400).json({
            message: "Tarefa inválida",
            error: taredasValidas.error.format()
        })
    }

    logger.info("Tarefa válida");

    next();
}

export const tarefaConcluidaMidlleware = (req: Request, res: Response, next: NextFunction) => {
    logger.info("Iniciando processo de validação da tarefa concluida...");

    const{concluida} = req.body;

    const tarefaConcluidaValidada = tarefasConcluidasSchema.safeParse({concluida});


    if(!tarefaConcluidaValidada.success){
        logger.warn("Tarefa concluida inválida");
        return res.status(400).json({
            message: "Tarefa Inválida",
            error: tarefaConcluidaValidada.error.format()
        })
    }

    next();
}