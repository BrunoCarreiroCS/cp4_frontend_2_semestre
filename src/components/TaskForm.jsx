import { useState } from 'react'
import { PRIORITIES } from '../utils/taskUtils'

const EMPTY_FORM = { name: '', date: '', description: '', priority: PRIORITIES[0] }

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
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form__row">
        <input
          type="text"
          name="name"
          placeholder="Nome da tarefa"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        name="description"
        placeholder="Descrição"
        value={form.description}
        onChange={handleChange}
        rows={3}
      />

      <div className="task-form__row">
        <select name="priority" value={form.priority} onChange={handleChange}>
          {PRIORITIES.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>

        <button type="submit">Adicionar tarefa</button>
      </div>
    </form>
  )
}
