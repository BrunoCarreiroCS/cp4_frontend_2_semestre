import { useMemo, useState } from 'react'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { TaskFilters } from './components/TaskFilters'
import { useTasks } from './hooks/useTasks'
import { FILTERS } from './utils/taskUtils'
import './styles/App.css'

function App() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks()
  const [filter, setFilter] = useState(FILTERS.ALL)

  // useMemo recalcula a lista filtrada só quando tasks ou filter mudam.
  const visibleTasks = useMemo(() => {
    if (filter === FILTERS.PENDING) return tasks.filter((task) => !task.completed)
    if (filter === FILTERS.DONE) return tasks.filter((task) => task.completed)
    return tasks
  }, [tasks, filter])

  const pendingCount = tasks.filter((task) => !task.completed).length

  return (
    <div className="app">
      <header>
        <h1>Lista de Tarefas do Programador</h1>
        <p>{pendingCount} tarefa(s) pendente(s)</p>
      </header>

      <TaskForm onAddTask={addTask} />
      <TaskFilters current={filter} onChange={setFilter} />
      <TaskList tasks={visibleTasks} onToggle={toggleTask} onRemove={removeTask} />
    </div>
  )
}

export default App
