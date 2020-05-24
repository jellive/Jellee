import { FILTER_ADDR } from '../models'

export const addFilterAddr = (addr: string) => {
  const filter = localStorage.getItem(FILTER_ADDR)
  let arr
  if (filter) arr = JSON.parse(filter)
  else arr = []
  arr.push(addr)
  localStorage.setItem(FILTER_ADDR, JSON.stringify(arr))
}

export const delFilterAddr = (addr: string) => {
  const filter = localStorage.getItem(FILTER_ADDR)
  const arr = JSON.parse(filter || '')
  arr.splice(arr.indexOf(addr), 1)
  localStorage.setItem(FILTER_ADDR, JSON.stringify(arr))
}
