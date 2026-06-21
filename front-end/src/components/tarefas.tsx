import "../style/tarefas.css";
import Data from "./data";
import Progresso from "../components/progresso";
import CampoTarefas from "./camposTarefas";
import CampoAtualizar from "./campoAtualizar";
import { useState } from "react";

type Tarefas = {
    id: number,
    tarefas: string,
    concluida: boolean,
}

function Tarefas() {
    const [armazenaTexto, setArmazenaTexto] = useState<Tarefas[]>([]);
    const [contador, setContador] = useState<number>(0);
    const [tarefasConcluidas, setTarefaConcluida] = useState<number>(0);
    const [estadoAtualizar, setEstadoAtualizar] = useState<boolean>(false);
    const [tarefaEditar, setTarefaEditar] = useState<string>("");
    const [idTarefaEditar, setIdTarefaEditar] = useState<number>(0);

    return (
        <>
            <div className={estadoAtualizar ? "container_principal_ativo" : "container_principal"}>
                <div className="container_secundario">
                    <Data />

                        <br />

                    <h1 className="titulo_tarefa">Tarefas</h1>

                    <p className="frase">
                        Tudo o que você precisa fazer em um só lugar
                    </p>

                        <br /><br />

                    <Progresso 
                        contador={contador}
                        tarefasConcluidas={tarefasConcluidas}
                    />

                        <br />

                    <CampoTarefas
                        armazenaTexto={armazenaTexto}
                        setArmazenaTexto={setArmazenaTexto} 
                        setContador={setContador}
                        setTarefaConcluida={setTarefaConcluida}
                        setEstadoAtualizar={setEstadoAtualizar}
                        setTarefaEditar={setTarefaEditar}
                        setIdTarefaEditar={setIdTarefaEditar}
                    />
                </div>
            </div>

            <CampoAtualizar 
                estadoAtualizar={estadoAtualizar}
                setEstadoAtualizar={setEstadoAtualizar}
                tarefaEditar={tarefaEditar}
                setTarefaEditar={setTarefaEditar}
                idTarefaEditar={idTarefaEditar}
                armazenaTexto={armazenaTexto}
                setArmazenaTexto={setArmazenaTexto}
            />
        </>
    );
}

export default Tarefas;