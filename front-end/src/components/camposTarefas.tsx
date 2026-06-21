         import "../style/campoTarefas.css";
import { useState, useRef, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { postTarefa, getTarefa, deleteTarefa, putTarefaConcluida } from "../service/apiTarefas";
import { FaPen } from "react-icons/fa6";

type Tarefas = {
    id: number,
    tarefas: string,
    concluida: boolean,
}

type CampoAdicionarTarefaProps = {
    armazenaTexto: Tarefas[],
    setArmazenaTexto: React.Dispatch<React.SetStateAction<Tarefas[]>>,
    setContador: React.Dispatch<React.SetStateAction<number>>,
    setTarefaConcluida: React.Dispatch<React.SetStateAction<number>>,
    setEstadoAtualizar: React.Dispatch<React.SetStateAction<boolean>>,
    setTarefaEditar: React.Dispatch<React.SetStateAction<string>>,
    setIdTarefaEditar: React.Dispatch<React.SetStateAction<number>>,
}

function CampoAdicionarTarefa({armazenaTexto, setArmazenaTexto, setContador, setTarefaConcluida, setEstadoAtualizar, setTarefaEditar, setIdTarefaEditar}: CampoAdicionarTarefaProps) {
    const [ativo, setAtivo] = useState(false);
    const [estado, setEstado] = useState<number>(1);
    const [texto, setTexto] = useState<string>("");

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickFora(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setAtivo(false);
            }
        }

        document.addEventListener("mousedown", handleClickFora);

        return () => {
            document.removeEventListener("mousedown", handleClickFora);
        };
    }, []);

    useEffect(() => {
        async function bsucarTarefas() {
            const tarefas = await getTarefa()

           setArmazenaTexto(tarefas);
        }

        bsucarTarefas();
    }, [setArmazenaTexto]);

    useEffect(() => {
        setContador(armazenaTexto.length);
    }, [armazenaTexto, setContador]);

    useEffect(() => {
        setTarefaConcluida(armazenaTexto.filter((tarefas) => tarefas.concluida).length);
    }, [armazenaTexto, setTarefaConcluida]);

    async function enviarTexto(){
        if(!texto.trim()){
            alert("Preenchimento do campo obrigatório");
            return;
        }

        await postTarefa(texto);

        const tarefas = await getTarefa();

        setArmazenaTexto(tarefas)

        setTexto("");
    }

    async function tarefaConcluida(id: number) {
        const tarefaConcluida = armazenaTexto.find((tarefa) => {
            return tarefa.id === id
        })

        await putTarefaConcluida(
            id, 
            !tarefaConcluida?.concluida
        );

        setArmazenaTexto(() =>
            armazenaTexto.map((tarefa) =>
                tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida} : tarefa
            )
        );
    }

    const tarefas_concluidas = armazenaTexto.filter((tarefa) => {
        return tarefa.concluida
    })

    const tarefas_pendentes = armazenaTexto.filter((tarefa) => {
        return !tarefa.concluida
    })

    async function excluirTarefa(id: number){
        await deleteTarefa(id);

        const filterDelete = armazenaTexto.filter((tarefa) => {
            return tarefa.id !== id;
        })

        setArmazenaTexto(filterDelete);
    }

    return (
        <>
            <div ref={containerRef} className={ativo ? "container_add_tarefas_ativo" : "container_add_tarefas"} onClick={() => setAtivo(true)}>
                <div className="IoAdd">
                    <IoAdd />
                </div>

                <input type="text" placeholder="Adicionar nova tarefa" className="input_tarefas" 
                    value={texto}

                    onChange={(event) => setTexto(event.target.value)}
                />

                <button type="button" className="btn_add_tarefas" onClick={() => {enviarTexto()}}>
                    Adicionar
                </button>
            </div>

                <br />

            <div className="tipos_tarefas">
                <div className={estado === 1 ? "todas_tarefas_ativado" : "todas_tarefas"} onClick={() => setEstado(1)}>
                    Todas
                </div>

                <div className={estado === 2 ? "tarefas_pendentes_ativado" : "tarefas_pendentes"} onClick={() => setEstado(2)}>
                    Pendentes
                </div>

                <div className={estado === 3 ? "tarefas_concluidas_ativado" : "tarefas_concluidas"} onClick={() => setEstado(3)}>
                    Concluídas
                </div>
            </div>

                <br />

            <div>
                
                <div className={estado === 1 ? "campoTarefa_ativado_1" : "campoTarefa_1"} onClick={() => setEstado(1)}>
                    {armazenaTexto.length === 0 && (
                        <div className="incon_list">
                            <FaListCheck />
                        </div>
                    )}

                    {armazenaTexto.length === 0 && (
                        <p className="texto_comece_add_tarefas">Adicione sua primeira tarefa</p>
                    )}

                    {armazenaTexto.map((tarefa) => (
                        <div className="campo_de_tarefas" key={tarefa.id}>
                            {<div className="tarefa_concluida" onClick={() => {tarefaConcluida(tarefa.id)}}></div>}

                            <div className={!tarefa.concluida ? "tarefa" : "efeito_de_tarefa_concluida"}>
                                {tarefa.tarefas}
                            </div>

                            <FaPen className="editar" onClick={() => {setEstadoAtualizar(true); setTarefaEditar(tarefa.tarefas); setIdTarefaEditar(tarefa.id)}} />

                            <FaTrashCan className="lixeira" onClick={() => {excluirTarefa(tarefa.id)}}/>
                        </div>
                    ))}
                </div>
                

                <div className={estado === 2 ? "campoTarefa_ativado_2" : "campoTarefa_2"} onClick={() => setEstado(2)}>
                    {tarefas_pendentes.length === 0 && (
                        <div className="incon_list">
                            <FaListCheck />
                        </div>
                    )}

                    {tarefas_pendentes.length === 0 && (
                        <p className="texto_comece_add_tarefas">Nenhuma tarefa pendente</p>
                    )}

                    {armazenaTexto.filter((tarefa) => !tarefa.concluida).map((tarefa) => (
                        <div className="campo_de_tarefas" key={tarefa.id}>
                            <div className="tarefa_concluida" onClick={() => {tarefaConcluida(tarefa.id)}}></div>

                            <div className={!tarefa.concluida ? "tarefa" : "efeito_de_tarefa_concluida"}>
                                {tarefa.tarefas}
                            </div>

                            <FaPen className="editar" onClick={() => {setEstadoAtualizar(true); setTarefaEditar(tarefa.tarefas); setIdTarefaEditar(tarefa.id)}} />

                            <FaTrashCan className="lixeira" onClick={() => {excluirTarefa(tarefa.id)}}/>
                        </div>
                    ))}
                </div>

                <div className={estado === 3 ? "campoTarefa_ativado_3" : "campoTarefa_3"} onClick={() => setEstado(3)}>
                    {tarefas_concluidas.length === 0 && (
                        <div className="incon_list">
                            <FaListCheck />
                        </div>
                    )}

                    {tarefas_concluidas.length === 0 && (
                        <p className="texto_comece_add_tarefas">Nenhuma tarefa concluída ainda</p>
                    )}

                    {armazenaTexto.filter((tarefa) => tarefa.concluida).map((tarefa) => (
                        <div className="campo_de_tarefas" key={tarefa.id}>
                            <div className="tarefa_concluida" onClick={() => {tarefaConcluida(tarefa.id)}}></div>

                            <div className={!tarefa.concluida ? "tarefa" : "efeito_de_tarefa_concluida"}>
                                {tarefa.tarefas}
                            </div>

                            <FaPen className="editar" onClick={() => {setEstadoAtualizar(true); setTarefaEditar(tarefa.tarefas); setIdTarefaEditar(tarefa.id)}} />

                            <FaTrashCan className="lixeira" onClick={() => {excluirTarefa(tarefa.id)}}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CampoAdicionarTarefa;