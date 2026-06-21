import rateLimit from "express-rate-limit";

const limit = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Muitas requisições. Tente novamente daqui a 15 minutos."
})

export default limit;