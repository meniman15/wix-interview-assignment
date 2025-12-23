/**
 * Generate a unique ID using timestamp and random values
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Generate multiple unique IDs
 */
export const generateIds = (count: number): string[] => {
  return Array.from({ length: count }, () => generateId())
}
