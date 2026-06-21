import express from "express";
import helmet from "helmet";
import cors from "cors";
import env from "../env/env";
import morgan from "morgan";
import limit from "../middleware/rateLimit";
import logger from "../logger/logger";
import router from "../router/routerTraefas";


const server = express();

server.use(helmet());
server.use(cors(
    {
        credentials: true
    }
));
server.use(express.json());
server.use(morgan("dev"));
server.use(limit);

server.use("/tarefas", router);

server.listen(env.port, (err) => {
    if(err){
        logger.error(`Erro ao iniciar o servidor: ${err.message}`);
        return;
    }

    logger.info("Servidor iniciado");
});

export default server;