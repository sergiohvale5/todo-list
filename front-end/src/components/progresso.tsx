import "../style/progresso.css";

type progressoProps = {
    contador: number
    tarefasConcluidas: number
}

function Progresso({contador, tarefasConcluidas}: progressoProps) {

    const percentual_tarefas_concluidas: number = contador > 0 ? (tarefasConcluidas / contador) * 100 : 0;
    const percentual_formatado: string = percentual_tarefas_concluidas.toFixed(0)
    const total_de_tarefas: number = contador - tarefasConcluidas;

    return (
        <div className="progresso">
            <p className="frase_progresso">Progresso do dia</p>

            <div className="dashboard">
                <p className="numero_de_tarefas">
                    {total_de_tarefas}
                    <span className="numero_de_tarefas_concluidas">
                        /{tarefasConcluidas}
                    </span>
                </p>

                <p className="taxa_de_tarefas_concluidas">
                    {percentual_formatado}%
                    <span className="frase_concluido">
                        concluído
                    </span>
                </p>
            </div>

            <div className="linha_arredondada"></div>
        </div>
    );
}

export default Progresso;