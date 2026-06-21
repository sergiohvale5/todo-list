import { Router } from "express";
import { tarefasMidlleware, tarefaConcluidaMidlleware } from "../middleware/tarefasMiddleware";
import { postTarefasController, getTarefasController, putTarefasController, putTarefasEditadasController, deleteTarefasController } from "../controller/crontrollerTarefas";

const router = Router();

router.post("/", tarefasMidlleware, postTarefasController);
router.get("/", getTarefasController);
router.put("/:id/concluida", tarefaConcluidaMidlleware, putTarefasController);
router.put("/:id", tarefasMidlleware, putTarefasEditadasController);
router.delete("/:id", deleteTarefasController);

export default router;