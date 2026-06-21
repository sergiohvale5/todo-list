import dotenv from "dotenv";
import logger from "../logger/logger";

dotenv.config();

if(!process.env.PORT){
    logger.error("process.env.PORT é obrigatório");
    throw new Error("process.env.PORT é obrigatório")
}

const env = {
    port: process.env.PORT,
}

export default env;