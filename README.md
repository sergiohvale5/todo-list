# Todo List

Aplicação Full Stack para gerenciamento de tarefas, desenvolvida com **React, Node.js, TypeScript e SQLite**.

O sistema permite criar, visualizar, editar, concluir e remover tarefas, oferecendo uma interface simples e intuitiva para organização pessoal.

---

## Deploy

O projeto possui uma versão publicada para acesso online.

**Aplicação:**
https://todo-list-production-97a2.up.railway.app/

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
* Vite
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

## Como Executar o Projeto Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/sergiohvale5/todo-list.git
cd todo-list
```

### 2. Instalar as dependências

#### Back-end

```bash
cd back-end
npm install
```

#### Front-end

Em outro terminal:

```bash
cd front-end
npm install
```

---

## Configuração das Variáveis de Ambiente

### Back-end

Crie um arquivo `.env` dentro da pasta `back-end`:

```env
PORT=
```

### Front-end

Crie um arquivo `.env` dentro da pasta `front-end`:

```env
VITE_API_URL_TAREFAS=
```

> Os arquivos `.env` não devem ser enviados para o GitHub. Em produção, as variáveis de ambiente são configuradas diretamente na plataforma de deploy.

---

## Executando o Back-end

Dentro da pasta `back-end`:

```bash
npm run dev
```
---

## Executando o Front-end

Dentro da pasta `front-end`:

```bash
npm run dev
```

## Testes

O projeto utiliza **Vitest** e **Supertest** para testes.

Para executar os testes:

```bash
npm run test
```

---

## Recursos e Boas Práticas

* Validação de dados com Zod
* Logs de aplicação com Winston
* Segurança HTTP com Helmet
* Controle de requisições com Express Rate Limit
* Tratamento de erros
* Persistência de dados com SQLite
* API REST
* Arquitetura em camadas
* Variáveis de ambiente
* Separação entre front-end e back-end

---

## Objetivo do Projeto

Projeto desenvolvido para estudo e prática de **desenvolvimento Full Stack**, aplicando conceitos de:

* React
* TypeScript
* Node.js
* Express
* APIs REST
* Banco de dados
* Arquitetura de software
* Validação de dados
* Segurança
* Testes automatizados
* Deploy de aplicações

O projeto também faz parte da minha evolução profissional na área de desenvolvimento de software.

---

## Autor

**Sérgio Henrique Vale Júnior**

Projeto desenvolvido para aprendizado, prática e evolução profissional.
