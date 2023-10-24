export const appendBefore = (
  splitter: RegExp,
  originalContent: string,
  newContent: string
) =>
  originalContent
    .split(splitter)
    .map((chunk, index) => (!index ? `${chunk}${newContent}` : chunk))
    .join('')
