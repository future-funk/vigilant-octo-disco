export const escapeSingleQuoteForSql = (val: string): string => {
  if (!val) {
    return val
  }
  return val.replace(/'/g, "''")
}

export default escapeSingleQuoteForSql
