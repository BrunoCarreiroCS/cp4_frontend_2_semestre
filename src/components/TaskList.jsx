import { TaskItem } from './TaskItem'

export function TaskList({ tasks, onToggle, onRemove }) {
  if (tasks.length === 0) {
    return <p className="task-list__empty">Nenhuma tarefa encontrada.</p>
  }

  return (
    <ul className="task-list">
      {/* map transforma cada tarefa do array em um componente TaskItem */}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  )
}
