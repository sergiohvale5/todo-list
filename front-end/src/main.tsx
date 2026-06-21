import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PagesTarefas from './pages/pagesTarefas';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PagesTarefas />
  </StrictMode>,
)
