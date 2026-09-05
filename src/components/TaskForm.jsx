import { useState } from 'react'
import { PRIORITIES } from '../utils/taskUtils'

const EMPTY_FORM = { name: '', date: '', description: '', priority: PRIORITIES[0] }

const fieldClass =
  'rounded-lg border border-border bg-surface-alt px-3 py-2.5 text-sm text-ink placeholder:text-muted outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25'

const labelClass = 'text-xs font-medium text-muted'

// Recebe onAddTask como callback: quem decide o que fazer com a nova
// tarefa é o componente pai (App), este formulário só coleta os dados.
export function TaskForm({ onAddTask }) {
  const [form, setForm] = useState(EMPTY_FORM)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim()) return

    onAddTask(form)
    setForm(EMPTY_FORM)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-4 shadow-[0_6px_14px_-8px_rgba(0,0,0,0.5)] sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="task-name" className={labelClass}>
            Nome da tarefa
          </label>
          <input
            id="task-name"
            type="text"
            name="name"
            placeholder="Ex: corrigir bug no login"
            value={form.name}
            onChange={handleChange}
            required
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:w-44">
          <label htmlFor="task-date" className={labelClass}>
            Prazo
          </label>
          <input
            id="task-date"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="task-description" className={labelClass}>
          Descrição{' '}
          <span className="text-muted/70 normal-case">(opcional)</span>
        </label>
        <textarea
          id="task-description"
          name="description"
          placeholder="Detalhes, contexto ou passos da tarefa"
          value={form.description}
          onChange={handleChange}
          rows={3}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-1.5 sm:w-40">
          <label htmlFor="task-priority" className={labelClass}>
            Prioridade
          </label>
          <select
            id="task-priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className={fieldClass}
          >
            {PRIORITIES.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover active:scale-[0.98]"
        >
          Adicionar tarefa
        </button>
      </div>
    </form>
  )
}
