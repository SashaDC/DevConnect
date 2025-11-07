import db from './connection.ts'
import { Post } from '../../models/posts'

export async function getAllPosts() {
  const post = await db('posts').select()
  return post as Post[]
}

export async function getPostById(id: number | string) {
  const post = await db('posts').select().first().where({ id })
  return post as Post
}

export async function addPost(data: postData) {
  const [id] = await db('posts').insert(data)
  return id
}
