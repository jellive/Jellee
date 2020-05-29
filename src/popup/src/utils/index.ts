export const getChrome = (key: string): PromiseLike<Array<string>> => {
  return new Promise((res) => {
    chrome.storage.sync.get(key, data => {
      res(Object.values(data))
    })
  })
}

export const setChrome = (key: string, value: any) => {
  return new Promise((res) => {
    const obj: { [key: string]: any } = {}
    obj[key] = value
    chrome.storage.sync.set(obj, () => {
      res(true)
    })
  })
}
