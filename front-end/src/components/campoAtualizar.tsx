import "../style/campoAtualizar.css";
import { putEditarTarefa } from "../service/apiTarefas";
import { useState } from "react";

type Tarefas = {
    id: number,
    tarefas: string,
    concluida: boolean,
}

type EstadoProps = {
    estadoAtualizar: boolean,
    setEstadoAtualizar: React.Dispatch<React.SetStateAction<boolean>>,
    tarefaEditar: string,
    setTarefaEditar: React.Dispatch<React.SetStateAction<string>>,
    idTarefaEditar: number,
    armazenaTexto: Tarefas[],
    setArmazenaTexto: React.Dispatch<React.SetStateAction<Tarefas[]>>
}

function CampoAtualizar({estadoAtualizar, setEstadoAtualizar, tarefaEditar, setTarefaEditar, idTarefaEditar, armazenaTexto, setArmazenaTexto}: EstadoProps){
    const [alerta, setAlerta] = useState<string>("");
    const [erro, setErro] = useState<string>("");

    async function editarTarefa(id: number){
        if(!tarefaEditar.trim()){
            setAlerta("Preenchimento do campo obrigatório")
            
            setTimeout(() => {
                setAlerta("");
            }, 3000);
            
            return;
        }

        const tarefaOriginal = armazenaTexto.find((tarefas) => {
            return tarefas.id === idTarefaEditar
        })

        if (tarefaEditar === tarefaOriginal?.tarefas) {
            setAlerta("Atualize a tarefa para salvar")
            
            setTimeout(() => {
                setAlerta("");
            }, 3000);
            return;
        }

        try{
            await putEditarTarefa(id, tarefaEditar);

            setArmazenaTexto(
                armazenaTexto.map((tarefas) => {
                    return tarefas.id === idTarefaEditar ? {...tarefas, tarefas: tarefaEditar} : tarefas
                })
            );

            setTarefaEditar("");

            setEstadoAtualizar(false);
        }catch(err){
            setErro("Erro ao editar tarefa");

            setTimeout(() => {
                setErro("");
            }, 3000);

            throw err;
        }
    }

    async function editarTarefaEnter(event: React.KeyboardEvent<HTMLInputElement>, id: number){
        if(event.key !== 'Enter') return;

        if(!tarefaEditar.trim()){
            setAlerta("Preenchimento do campo obrigatório")
            
            setTimeout(() => {
                setAlerta("");
            }, 3000);
            
            return;
        }

        const tarefaOriginal = armazenaTexto.find((tarefas) => {
            return tarefas.id === idTarefaEditar
        })

        if (tarefaEditar === tarefaOriginal?.tarefas) {
            setAlerta("Atualize a tarefa para salvar")
            
            setTimeout(() => {
                setAlerta("");
            }, 3000);
            return;
        }

        try{
            await putEditarTarefa(id, tarefaEditar);

            setArmazenaTexto(
                armazenaTexto.map((tarefas) => {
                    return tarefas.id === idTarefaEditar ? {...tarefas, tarefas: tarefaEditar} : tarefas
                })
            );

            setTarefaEditar("");

            setEstadoAtualizar(false);
        }catch(err){
            setErro("Erro ao editar tarefa");

            setTimeout(() => {
                setErro("");
            }, 3000);

            throw err;
        }
    }


    return(
        <div className={estadoAtualizar ? "container_atualizacao_ativo" :"container_atualizacao"}>
            {
                alerta && (
                    <div className="notificacao_alerta">
                        {alerta}
                    </div>
                )
            }

            {
                erro && (
                    <div className="notificacao_error">
                        {erro}
                    </div>
                )
            }

            <p className="titulo_editar">Editar Tarefa</p>

            <p className="texto_atualizar">Atualize o texto e clique em salvar</p>

            <input type="text" className="input_atualizar" placeholder="Nome da tarefa"  
                value={tarefaEditar}

                onChange={(event) => setTarefaEditar(event.target.value)}

                onKeyDown={(event) => editarTarefaEnter(event, idTarefaEditar)}
            />

            <div className="container_btn">
                <button type="button" className="btn_cancelar" onClick={() => setEstadoAtualizar(false)}>Cancelar</button>
                <button type="button" className="btn_salvar" onClick={() => editarTarefa(idTarefaEditar)}>Salvar</button>
            </div>
        </div>
    )
}

export default CampoAtualizar;