import { FILTERS } from '../utils/taskUtils'

const OPTIONS = [
  { value: FILTERS.ALL, label: 'Todas' },
  { value: FILTERS.PENDING, label: 'Pendentes' },
  { value: FILTERS.DONE, label: 'Concluídas' },
]

export function TaskFilters({ current, onChange }) {
  return (
    <div className="task-filters">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={option.value === current ? 'active' : ''}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
