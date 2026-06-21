import sqlite3 from "sqlite3";
import logger from "../logger/logger";

const sqlite = sqlite3.verbose();

const db = new sqlite.Database("database.db", (err) => {
    if(err){
        logger.error(`Erro ao criar a tabela tarefas: ${err.message}`);
        return;
    }

    logger.info("Banco de dados conectado.")
})

db.serialize(() => {
    db.run(
        `CREATE TABLE IF NOT EXISTS tarefas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tarefas TEXT NOT NULL,
            concluida BOOLEAN DEFAULT 0
        )`, (err) => {
            if(err){
                logger.error(`Erro ao criar a tabela tarefas: ${err.message}`);
                return;
            }

            logger.info("Tabela tarefas criada.");
        }
    )
})

export default db;