import axios from "axios"

const api = axios.create({baseURL: "https://safe-transaction.gnosis.io/api/v1/"})

export const daoBalance = async (safeAddress) => {
  const { data } = await api.get(`safes/${safeAddress}/balances/usd/?limit=4&trusted=true&exclude_spam=true`)
  return data
}

export const daoMembers = async (safeAddress) => {
  const { data } = await api.get(`safes/${safeAddress}/`)
  return data.owners
}