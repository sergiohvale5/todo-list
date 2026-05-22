import { Request, Response } from 'express';
import { openDb } from '../database/database';

export async function createTask(req: Request, res: Response) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      error: 'Título obrigatório'
    });
  }

  const db = await openDb();

  await db.run(
    'INSERT INTO tasks (title) VALUES (?)',
    [title]
  );

  return res.status(201).json({
    message: 'Tarefa criada'
  });
}

export async function getTasks(req: Request, res: Response) {
  const db = await openDb();

  const tasks = await db.all(
    'SELECT * FROM tasks'
  );

  return res.json(tasks);
}

export async function updateTask(req: Request, res: Response) {
  const { id } = req.params;

  const { title, completed } = req.body;

  const db = await openDb();

  await db.run(
    `
      UPDATE tasks
      SET title = ?, completed = ?
      WHERE id = ?
    `,
    [title, completed, id]
  );

  return res.json({
    message: 'Tarefa atualizada'
  });
}

export async function deleteTask(req: Request, res: Response) {
  const { id } = req.params;

  const db = await openDb();

  await db.run(
    'DELETE FROM tasks WHERE id = ?',
    [id]
  );

  return res.json({
    message: 'Tarefa removida'
  });
}