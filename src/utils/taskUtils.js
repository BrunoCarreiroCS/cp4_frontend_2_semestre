export const PRIORITIES = ['Baixa', 'Média', 'Alta']

export const FILTERS = {
  ALL: 'all',
  PENDING: 'pending',
  DONE: 'done',
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
