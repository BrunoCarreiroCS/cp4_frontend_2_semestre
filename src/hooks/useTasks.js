import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { createTask } from '../utils/taskUtils'

// Centraliza toda a lógica de tarefas: cadastro, conclusão, remoção e persistência.
export function useTasks() {
  const [tasks, setTasks] = useLocalStorage('cp4-tasks', [])

  // useCallback evita recriar a função a cada render, já que ela é
  // passada como prop para componentes filhos (callback de adição).
  const addTask = useCallback(
    (taskData) => {
      setTasks((prev) => [...prev, createTask(taskData)])
    },
    [setTasks],
  )

  const toggleTask = useCallback(
    (id) => {
      // map percorre a lista e troca só o item concluído, sem mutar o array original.
      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task,
        ),
      )
    },
    [setTasks],
  )

  const removeTask = useCallback(
    (id) => {
      // filter remove a tarefa pelo id, mantendo as demais.
      setTasks((prev) => prev.filter((task) => task.id !== id))
    },
    [setTasks],
  )

  return { tasks, addTask, toggleTask, removeTask }
}
