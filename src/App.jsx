import { useMemo, useState } from 'react'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { TaskFilters } from './components/TaskFilters'
import { useTasks } from './hooks/useTasks'
import { FILTERS, pendingLabel } from './utils/taskUtils'

function App() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks()
  const [filter, setFilter] = useState(FILTERS.ALL)

  // useMemo recalcula a lista filtrada só quando tasks ou filter mudam.
  const visibleTasks = useMemo(() => {
    let filtered = tasks
    if (filter === FILTERS.PENDING) filtered = tasks.filter((task) => !task.completed)
    if (filter === FILTERS.DONE) filtered = tasks.filter((task) => task.completed)

    // Na aba "Todas", tarefas concluídas descem para o fim da lista,
    // mantendo o foco visual no que ainda precisa ser feito.
    if (filter === FILTERS.ALL) {
      return [...filtered].sort((a, b) => Number(a.completed) - Number(b.completed))
    }
    return filtered
  }, [tasks, filter])

  const pendingCount = tasks.filter((task) => !task.completed).length

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
        <header className="mb-8 text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Lista de Tarefas do Programador
          </h1>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                pendingCount === 0 ? 'bg-success' : 'bg-accent'
              }`}
            />
            {pendingLabel(pendingCount)}
          </p>
        </header>

        <TaskForm onAddTask={addTask} />

        <div className="mt-6 mb-4">
          <TaskFilters current={filter} onChange={setFilter} />
        </div>

        <TaskList
          tasks={visibleTasks}
          filter={filter}
          onToggle={toggleTask}
          onRemove={removeTask}
        />
      </div>
    </div>
  )
}

export default App
