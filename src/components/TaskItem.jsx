import { CheckIcon, TrashIcon, UndoIcon } from './icons'

const PRIORITY_CLASS = {
  Baixa: 'bg-success/15 text-success',
  Média: 'bg-warning/15 text-warning',
  Alta: 'bg-danger/15 text-danger',
}

export function TaskItem({ task, onToggle, onRemove }) {
  function handleRemove() {
    const confirmed = window.confirm(`Remover a tarefa "${task.name}"?`)
    if (confirmed) onRemove(task.id)
  }

  return (
    <li
      className={`animate-task-in flex items-start justify-between gap-4 rounded-xl border border-border bg-surface p-4 transition hover:border-accent/40 ${
        task.completed ? 'opacity-60' : ''
      }`}
    >
      <div className="flex flex-1 flex-col gap-1.5 text-left">
        <div className="flex flex-wrap items-center gap-2">
          <strong
            className={`text-sm font-semibold text-ink ${
              task.completed ? 'text-muted line-through' : ''
            }`}
          >
            {task.name}
          </strong>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${PRIORITY_CLASS[task.priority]}`}
          >
            {task.priority}
          </span>
        </div>
        {task.description && <p className="text-sm text-muted">{task.description}</p>}
        {task.date && <span className="text-xs text-muted">Prazo: {task.date}</span>}
      </div>

      <div className="flex shrink-0 flex-col gap-2">
        <button
          type="button"
          onClick={() => onToggle(task.id)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-alt px-3 py-1.5 text-xs font-medium text-ink transition hover:border-accent hover:text-accent"
        >
          {task.completed ? <UndoIcon /> : <CheckIcon />}
          {task.completed ? 'Reabrir' : 'Concluir'}
        </button>
        <button
          type="button"
          onClick={handleRemove}
          className="inline-flex items-center gap-1.5 rounded-lg border border-danger/40 px-3 py-1.5 text-xs font-medium text-danger transition hover:bg-danger/10"
        >
          <TrashIcon />
          Remover
        </button>
      </div>
    </li>
  )
}
