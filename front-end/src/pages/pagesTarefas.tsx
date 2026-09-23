import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Tarefas from "../components/tarefas";

function PagesTarefas(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}/>

                    <Route path="/tarefas" element={<Tarefas />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PagesTarefas;