type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>

export default AtLeast
