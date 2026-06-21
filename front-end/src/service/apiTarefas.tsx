export async function postTarefa(tarefas: string){
    try{
        const resposta = await fetch("http://localhost:3000/tarefas", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({tarefas})
        })

        if (!resposta.ok) {
            throw new Error("Erro ao adicionar tarefa");
        }

        const resposta_de_adicionamento = await resposta.json();

        return resposta_de_adicionamento;
    } catch(err){
        console.error(`Erro de servidor ao enviar tarefa ao database: ${err}`);
        throw err;
    }
}

export async function getTarefa(){
    try{
        const resposta = await fetch("http://localhost:3000/tarefas");

        if(!resposta.ok){
            throw new Error("Erro ao buscar tarefas");
        }

        const tarefas = await resposta.json();

        return tarefas;
    }catch(err){
        console.error(`Erro de servidor ao buscar tarefas do database: ${err}`);
        throw err;
    }
}

export async function deleteTarefa(id: number){
    try{
        const resposta = await fetch(`http://localhost:3000/tarefas/${id}`, {
            method: "DELETE"
        })

        if(!resposta.ok){
            throw new Error("Erro ao deletar tarefa")
        }

        const resposta_da_deletacao = await resposta.json();

        return resposta_da_deletacao;
    }catch(err){
        console.error(`Erro de servidor ao deletar tareda do banco de dados: ${err}`);
        throw err;
    }
}

export async function putEditarTarefa(id: number, tarefas: string) {
    try{
        const resposta = await fetch(`http://localhost:3000/tarefas/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({tarefas})
        })

        if(!resposta.ok){
            throw new Error("Erro ao editar tarefa");
        }

        const tarefa_editada = await resposta.json();

        return tarefa_editada;
    }catch(err){
        console.error(`Erro no servidor ao editar tarefa no banco de dados: {err}`);
        throw err
    }
}

export async function putTarefaConcluida(id: number, concluida: boolean) {
    try{
        const resposta = await fetch(`http://localhost:3000/tarefas/${id}/concluida`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({concluida})
        })

        if(!resposta.ok){
            throw new Error("Erro ao atualizar tarefa concluida");
        }

        const resposta_da_atualizacao = await resposta.json();

        return resposta_da_atualizacao;
    }catch(err){
        console.error(`Erro no servidor ao atualizar tarefa concluida no banco de dados: {err}`);
        throw err
    }
}