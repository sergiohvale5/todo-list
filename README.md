# Todo List

Aplicação Full Stack para gerenciamento de tarefas, desenvolvida com React, Node.js, TypeScript e SQLite.

O sistema permite criar, visualizar, editar, concluir e remover tarefas, oferecendo uma interface simples e intuitiva para organização pessoal.

---

## Funcionalidades

* Criar tarefas
* Listar tarefas
* Editar tarefas
* Excluir tarefas
* Marcar tarefas como concluídas
* Filtrar tarefas:

  * Todas
  * Pendentes
  * Concluídas
* Dashboard de progresso
* Validação de dados
* Logs de aplicação
* Proteção contra excesso de requisições

---

## Tecnologias Utilizadas

### Front-end

* React
* TypeScript
* React Router DOM
* React Icons
* CSS3

### Back-end

* Node.js
* Express
* TypeScript
* SQLite3
* Zod
* Winston
* Helmet
* CORS
* Express Rate Limit

### Testes

* Vitest
* Supertest

---

## Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

### 2. Instalar dependências

Front-end:

```bash
cd front-end
npm install
```

Back-end:

```bash
cd back-end
npm install
```

---

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` dentro da pasta back-end:

```env
PORT=3000
```

---

### 4. Iniciar o Back-end

```bash
npm run dev
```

Servidor disponível em:

```text
http://localhost:3000
```

---

### 5. Iniciar o Front-end

```bash
npm run dev
```

Aplicação disponível em:

```text
http://localhost:5173
```

---

## Endpoints da API

### Criar tarefa

```http
POST /tarefas
```

### Listar tarefas

```http
GET /tarefas
```

### Atualizar tarefa

```http
PUT /tarefas/:id
```

### Atualizar status da tarefa

```http
PUT /tarefas/:id/concluida
```

### Remover tarefa

```http
DELETE /tarefas/:id
```

---

## Recursos Implementados

* Validação de dados com Zod
* Logs de sistema com Winston
* Segurança HTTP com Helmet
* Controle de requisições com Rate Limit
* Tratamento de erros
* Banco de dados SQLite
* Arquitetura em camadas

---

## Objetivo do Projeto

Projeto desenvolvido para estudo de desenvolvimento Full Stack utilizando React, Node.js, TypeScript e SQLite, aplicando conceitos de arquitetura de software, APIs REST, persistência de dados e boas práticas de desenvolvimento.

---

## Autor

Sérgio Henrique Vale Júnior

Estudante de Análise e Desenvolvimento de Sistemas (ADS).
Projeto desenvolvido para aprendizado e evolução profissional.
