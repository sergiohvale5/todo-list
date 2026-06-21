import {describe, it, expect} from "vitest";
import request from "supertest";
import server from "../../server/serverTarefas";

describe("POST /tarefas", () => {

    /*it("Enviar tarefa ao database", async () => {
        const response = await request(server).post("/tarefas").send({
            tarefas: "Estudar react",
            concluida: false
        })

        expect(response.status).toBe(201);
        expect(response.body).toEqual({message: "Tarefa criada"})
    })*/

    /*it("Receber tarefa do database", async () => {
        const response = await request(server).get("/tarefas/1");

        expect(response.status).toBe(200);
    })*/

    /*it("Atualizar tarefa do tadabase", async () => {
        const response = await request(server).put("/tarefas/1").send({
            tarefas: "Estudar ts"
        })

        expect(response.status).toBe(200);
        expect(response.body).toEqual({message: "Tarefa atualizada"});
    })*/

    /*it("Deletar tarefa do tadabase", async () => {
    const response = await request(server).delete("/tarefas/1");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({message: "Tarefa deletada"});
    })*/

    /*it("Editar tarefa do database", async () => {
        const response = await request(server).put("/tarefas/22").send({
            tarefas: "Estudar react"
        })

        expect(response.status).toBe(200);
    })*/
})