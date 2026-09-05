const base = {
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function CheckIcon(props) {
  return (
    <svg {...base} className="h-3.5 w-3.5" aria-hidden="true" {...props}>
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  )
}

export function UndoIcon(props) {
  return (
    <svg {...base} className="h-3.5 w-3.5" aria-hidden="true" {...props}>
      <path d="M3 8a5 5 0 1 0 1.6-3.7" />
      <path d="M3 3v3h3" />
    </svg>
  )
}

export function TrashIcon(props) {
  return (
    <svg {...base} className="h-3.5 w-3.5" aria-hidden="true" {...props}>
      <path d="M3 4.5h10" />
      <path d="M6.25 4.5v-1a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v1" />
      <path d="M4.5 4.5l.6 8.1a1 1 0 0 0 1 .9h3.8a1 1 0 0 0 1-.9l.6-8.1" />
    </svg>
  )
}

export function ChecklistIcon(props) {
  return (
    <svg {...base} viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" {...props}>
      <path d="M9 6h10" />
      <path d="M9 12h10" />
      <path d="M9 18h10" />
      <path d="M4.5 6l1 1L7 5.3" />
      <path d="M4.5 12l1 1 1.5-1.7" />
      <path d="M4.5 18l1 1 1.5-1.7" />
    </svg>
  )
}
