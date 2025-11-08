import request from 'superagent'

const rootURL = new URL(`/api/v1/users`, document.baseURI)

export async function getAllUsers() {
  const response = await request.get(rootURL)
  return response.body
}

export async function getUserById(id: number) {
  const response = await request.get(`${rootURL}/${id}`)
  return response.body
}
