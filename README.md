# ✅ Todo-List

Aplicação Fullstack de gerenciamento de tarefas desenvolvida com React, Node.js, TypeScript e SQLite.

O projeto realiza integração completa entre frontend e backend utilizando API REST.

---

# 🚀 Tecnologias Utilizadas

## Frontend
- React
- TypeScript
- CSS
- Axios
- React Hooks

## Backend
- Node.js
- Express
- TypeScript
- SQLite3
- CORS

---

# 📌 Funcionalidades

- Criar tarefas
- Listar tarefas
- Atualizar tarefas
- Remover tarefas
- Marcar tarefas como concluídas
- Integração com API REST
- Renderização dinâmica de dados
- Gerenciamento de estado com React

---

# ⚙️ Como Rodar o Projeto

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/todo-fullstack.git
```

---

# 🔥 Backend

## Acesse a pasta

```bash
cd back-end
```

## Instale as dependências

```bash
npm install
```

## Execute o servidor

```bash
npm run dev
```

Servidor rodando em:

```txt
http://localhost:3333
```

---

# 💻 Frontend

## Acesse a pasta

```bash
cd front-end
```

## Instale as dependências

```bash
npm install
```

## Execute o projeto

```bash
npm run dev
```

Frontend rodando em:

```txt
http://localhost:5173
```

---

# 🔗 Endpoints da API

## Buscar tarefas

```http
GET /tasks
```

---

## Criar tarefa

```http
POST /tasks
```

Body:

```json
{
  "title": "Estudar React"
}
```

---

## Atualizar tarefa

```http
PUT /tasks/:id
```

Body:

```json
{
  "title": "Estudar Node",
  "completed": 1
}
```

---

## Remover tarefa

```http
DELETE /tasks/:id
```

---

# 🧠 Aprendizados

Durante o desenvolvimento deste projeto foram aplicados conceitos de:

- Integração Frontend/Backend
- Criação de API REST
- Gerenciamento de estado com React
- Organização Fullstack
- Arquitetura de pastas
- Banco de dados SQL
- CRUD completo
- TypeScript
- Componentização
- Consumo de API

---

# 📈 Melhorias Futuras

- Autenticação JWT
- Docker
- Deploy
- Testes automatizados
- Context API
- Dark Mode
- Responsividade avançada
- Filtros avançados

---

# 👨‍💻 Autor

Desenvolvido por Sérgio Henrique Vale Júnior.