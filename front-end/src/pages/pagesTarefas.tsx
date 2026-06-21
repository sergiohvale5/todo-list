import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Tarefas from "../components/tarefas";

function PagesTarefas(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/add_tarefas" element={<App />}/>

                    <Route path="/add_tarefas/tarefas" element={<Tarefas />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PagesTarefas;