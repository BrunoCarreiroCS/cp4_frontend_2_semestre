import { TaskItem } from './TaskItem'
import { ChecklistIcon } from './icons'
import { EMPTY_MESSAGES } from '../utils/taskUtils'

export function TaskList({ tasks, filter, onToggle, onRemove }) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-border py-14 text-center text-muted">
        <ChecklistIcon />
        <p className="text-sm">{EMPTY_MESSAGES[filter]}</p>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {/* map transforma cada tarefa do array em um componente TaskItem */}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  )
}
