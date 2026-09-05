export const PRIORITIES = ['Baixa', 'Média', 'Alta']

export const FILTERS = {
  ALL: 'all',
  PENDING: 'pending',
  DONE: 'done',
}

export function pendingLabel(count) {
  if (count === 0) return 'Nenhuma tarefa pendente'
  if (count === 1) return '1 tarefa pendente'
  return `${count} tarefas pendentes`
}

export const EMPTY_MESSAGES = {
  [FILTERS.ALL]: 'Nenhuma tarefa cadastrada ainda.',
  [FILTERS.PENDING]: 'Nenhuma tarefa pendente — tudo em dia.',
  [FILTERS.DONE]: 'Nenhuma tarefa concluída ainda.',
}

export function createTask({ name, date, description, priority }) {
  return {
    id: crypto.randomUUID(),
    name,
    date,
    description,
    priority,
    completed: false,
  }
}
