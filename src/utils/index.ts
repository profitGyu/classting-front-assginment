const shuffle = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5)
}

const unescapeHtml = (str: string) => {
  if (str == null) {
    return ''
  }

  return str

    .replace(/&amp;/g, '&')

    .replace(/&lt;/g, '<')

    .replace(/&gt;/g, '>')

    .replace(/&quot;/g, '"')

    .replace(/&#039;/g, "'")

    .replace(/&#39;/g, "'")
}
export { shuffle, unescapeHtml }
