import { useEffect, useState } from 'react'

// Hook customizado: guarda um estado no localStorage e o mantém sincronizado.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })

  // Sempre que o estado mudar, persiste automaticamente no localStorage.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
