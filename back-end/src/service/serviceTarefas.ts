import db from "../database/database"
import logger from "../logger/logger"

export const postTarefasService = (tarefa: string, concluida: boolean) => {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO tarefas(tarefas, concluida) VALUES(?, ?)`, 
            [tarefa, concluida], function (err){
                if(err){
                    logger.error(`Erro ao inserir tarefa no banco de dados: ${err.message}`);
                    reject({
                        message: err.message,
                        error: err
                    })
                    return;
                }

                if(this.changes === 0){
                    logger.warn("Nenhuma linha foi inserida no banco de dados");
                    resolve({message: "Nenhuma linha foi inserida no banco de dados"});
                    return;
                }

                logger.info("Tarefa criada");

                resolve({message: "Tarefa criada"});
            }
        )
    })
}

export const getTarefasService = () => {
    return new Promise((resolve, reject) => {
        db.all(
            `SELECT * FROM tarefas`,
            (err, row) => {
                if(err){
                    logger.error(`Erro ao buscar tarefas no banco de dados: ${err.message}`);
                    reject({
                        message: err.message,
                        error: err
                    })
                    return;
                }

                if(!row){
                    logger.warn(`Tarefas não encontradas`);
                    resolve({message: `Tarefas não encontradas`});
                    return;
                }

                logger.info("Tarefas encontradas");

                resolve(row)
            }
        )
    })
}

export const putTarefasService = (concluida: boolean, id: number) => {
    return new Promise((resolve, reject) => {
        db.run(
            `UPDATE tarefas SET concluida = ? WHERE id = ?`,
            [concluida, id], function (err){
                if(err){
                    logger.error(`Erro ao atualizar tarefa concluida de ID ${id}: ${err.message}`);;
                    reject({
                        message: err.message,
                        error: err
                    })
                    return;
                }

                if(this.changes === 0){
                    logger.warn(`Tentativa de atualizar tarefa concluida inexistente ID: ${id}`)
                    resolve({message: "Tarefa concluida não encontrada no database"});
                    return;
                }

                logger.info(`Tarefa concluida de ID ${id} atualizada com sucesso`);
                
                resolve({message: `Tarefa concluida de ID ${id} atualizada com sucesso`});
            }
        )
    })
}

export const putEditarTarefa = (tarefas: string, id: number) => {
    return new Promise((resolve, reject) => {
        db.run(
            `UPDATE tarefas SET tarefas = ? WHERE id = ?`,
            [tarefas, id], function (err) {
                if(err){
                    logger.error(`Erro ao editar tarefa de ID${id}: ${err.message}`);
                    reject({
                        message: err.message,
                        error: err
                    });
                    return;
                }

                if(this.changes === 0){
                    logger.warn(`Tentativa de editar tarefa inexistente ID: ${id}`)
                    resolve({message: "Tarefa não encontrada no database"});
                    return;
                }

                logger.info(`Tarefa de ID ${id} editada com sucesso`);

                resolve({message: `Tarefa de ID ${id} editada com sucesso`})
            }
        )
    })
}

export const deleteTarefasService = (id: number) => {
    return new Promise((resolve, reject) => {
        db.run(
            `DELETE FROM tarefas WHERE id = ?`,
            [id], function (err){
                if(err){
                    logger.error(`Erro ao remover tarefa ID ${id}: ${err.message}`);
                    reject({
                        message: err.message,
                        error: err
                    })
                    return;
                }

                if(this.changes === 0){
                    logger.warn(`Tentativa de remover tarefa inexistente. ID: ${id}`);
                    resolve({message: `Tentativa de remover tarefa inexistente. ID: ${id}`});
                    return;
                }

                logger.info(`Tarefa ID ${id} removida com sucesso`);
                
                resolve({message: `Tarefa ID ${id} removida com sucesso`});
            }   
        )
    })
}