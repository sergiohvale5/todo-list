const api_url_tarefas = import.meta.env.VITE_API_URL_TAREFAS;

if (!api_url_tarefas) {
    throw new Error(
        "A variável de ambiente VITE_API_URL_TAREFAS é obrigatória"
    );
}

export const env = {
    api_url_tarefas
};