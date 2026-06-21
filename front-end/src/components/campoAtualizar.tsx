import "../style/campoAtualizar.css";
import { putEditarTarefa } from "../service/apiTarefas";

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
    async function editarTarefa(id: number){
        if(!tarefaEditar.trim()){
            alert("Preenchimento do campo obrigatório");
            return;
        }

        const tarefaOriginal = armazenaTexto.find((tarefas) => {
            return tarefas.id === idTarefaEditar
        })

        if (tarefaEditar === tarefaOriginal?.tarefas) {
            alert("Atualize a tarefa para salvar");
            return;
        }

        await putEditarTarefa(id, tarefaEditar);

        setArmazenaTexto(
            armazenaTexto.map((tarefas) => {
                return tarefas.id === idTarefaEditar ? {...tarefas, tarefas: tarefaEditar} : tarefas
            })
        );

        setTarefaEditar("");

        setEstadoAtualizar(false);
    }

    return(
        <div className={estadoAtualizar ? "container_atualizacao_ativo" :"container_atualizacao"}>
            <p className="titulo_editar">Editar Tarefa</p>

            <p className="texto_atualizar">Atualize o texto e clique em salvar</p>

            <input type="text" className="input_atualizar" placeholder="Nome da tarefa"  
                value={tarefaEditar}

                onChange={(event) => setTarefaEditar(event.target.value)}
            />

            <div className="container_btn">
                <button type="button" className="btn_cancelar" onClick={() => setEstadoAtualizar(false)}>Cancelar</button>
                <button type="button" className="btn_salvar" onClick={() => editarTarefa(idTarefaEditar)}>Salvar</button>
            </div>
        </div>
    )
}

export default CampoAtualizar;