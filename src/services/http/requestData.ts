const fetchRequest = async (url: string) => {
  try {
    const response = await globalThis.fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error(response.statusText)
    }
  } catch (error: any) {
    throw new Error(error)
  }
}

export default fetchRequest
