import { usePosts } from '../hooks/useFetchPosts.ts'

function Posts() {
  const { data, isLoading, error } = usePosts()

  if (isLoading) 
    return <p> Post is loading.. </p>
  if (error)
    return  <p> Beep Bop.. something went wrong loading the post.. </p>

  return (
    <>
      <div className="posts">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - Social Media Posts
        </h1>
        <ul>
          {data?.map((post) => (
          <li key={post.id}>
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            </li>
           ))}
        </ul>
      </div>
    </>
  )
}

export default Posts
