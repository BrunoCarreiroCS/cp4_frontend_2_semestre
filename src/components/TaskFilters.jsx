import { FILTERS } from '../utils/taskUtils'

const OPTIONS = [
  { value: FILTERS.ALL, label: 'Todas' },
  { value: FILTERS.PENDING, label: 'Pendentes' },
  { value: FILTERS.DONE, label: 'Concluídas' },
]

export function TaskFilters({ current, onChange }) {
  return (
    <div className="flex gap-1 rounded-full border border-border bg-surface p-1">
      {OPTIONS.map((option) => {
        const isActive = option.value === current
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? 'bg-accent text-white shadow-sm'
                : 'text-muted hover:bg-surface-alt hover:text-ink'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
