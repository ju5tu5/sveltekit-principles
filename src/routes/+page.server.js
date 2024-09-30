// import { API_KEY } from '$env/dynamic/private'
import { PUBLIC_API_URL } from '$env/static/public'
import fetchJson from '$lib/server/fetchJson'

export async function load() {
  const url = PUBLIC_API_URL + 'person/'
  const persons = await fetchJson(url)

  return {
    persons: persons.data,
  }
}
