export const validate = (what: string): boolean => {
  if (!what) {
    return false
  }

  const prepared = what.replace(/\s+/g, '')

  if (!prepared) {
    return false
  }

  return true
}
