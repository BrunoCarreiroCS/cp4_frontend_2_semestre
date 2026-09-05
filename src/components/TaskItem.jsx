const PRIORITY_CLASS = {
  Baixa: 'priority-low',
  Média: 'priority-medium',
  Alta: 'priority-high',
}

export function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li className={`task-item ${task.completed ? 'task-item--done' : ''}`}>
      <div className="task-item__info">
        <div className="task-item__header">
          <strong>{task.name}</strong>
          <span className={`badge ${PRIORITY_CLASS[task.priority]}`}>
            {task.priority}
          </span>
        </div>
        {task.description && <p>{task.description}</p>}
        {task.date && <small>Prazo: {task.date}</small>}
      </div>

      <div className="task-item__actions">
        <button type="button" onClick={() => onToggle(task.id)}>
          {task.completed ? 'Reabrir' : 'Concluir'}
        </button>
        <button type="button" className="danger" onClick={() => onRemove(task.id)}>
          Remover
        </button>
      </div>
    </li>
  )
}
