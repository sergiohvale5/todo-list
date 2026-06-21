import type {Request, Response} from "express";
import logger from "../logger/logger";
import { postTarefasService, getTarefasService, putTarefasService, deleteTarefasService, putEditarTarefa } from "../service/serviceTarefas";
import { resolve } from "node:dns";

export const postTarefasController = async (req: Request, res: Response) => {
    try{
        logger.info("Iniciando processo de criação de tarefa...");

        const {tarefas, concluida} = req.body;

        const concluidaBoolean = Boolean(concluida);

        const dados_da_tarefa = await postTarefasService(tarefas, concluidaBoolean);
        
        return res.status(201).json(dados_da_tarefa);
    }catch(err){
        logger.error(`Erro interno ao criar tarefa: ${err}`);
        return res.status(500).json({
            error: "Erro interno no servidor"
        });
    }
}

export const getTarefasController = async (req: Request, res: Response) => {
    try{
        logger.info(`Iniciando processo de busca de tarefas...`);

        const tarefas = await getTarefasService();

        return res.status(200).json(tarefas);
    }catch(err){
        logger.error(`Erro ao buscar tarefa: ${err}`);
        return res.status(500).json({
            error: "Erro interno no servidor"
        });
    }
}

export const putTarefasController = async (req: Request, res: Response) => {
    try{
        const {concluida} = req.body;

        const {id} = req.params;

        logger.info(`Atualizando tarefa com ID ${id}`);

        const idNumber = Number(id);

        const tarefaAtualizada = await putTarefasService(concluida, idNumber);

        return res.status(200).json(tarefaAtualizada);
    }catch(err){
        logger.error(`Erro ao atualizar tarefa: ${err}`);
        return res.status(500).json({
            error: "Erro interno no servidor"
        });
    }
}

export const putTarefasEditadasController = async (req: Request, res: Response) => {
    try{
        logger.info("Iniciando processo de atualização da tarefa...");

        const {id} = req.params;

        const idNumber = Number(id);

        const {tarefas} = req.body;

        const tarefaAtualizada = await putEditarTarefa(tarefas ,idNumber);

        return res.status(200).json(tarefaAtualizada);
    }catch(err){
        logger.error(`Erro em editar tarefa: ${err}`)
        return res.status(500).json({
            error: "Erro interno no servidor"
        })
    }
}

export const deleteTarefasController = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;

        logger.info(`Removendo tarefa com ID ${id}`);

        const idNumber = Number(id);

        const tarefaDeletada = await deleteTarefasService(idNumber);

        return res.status(200).json(tarefaDeletada);
    }catch(err){
        logger.error(`Erro ao remover tarefa: ${err}`);
        return res.status(500).json({
            error: "Erro interno no servidor"
        });
    }
}