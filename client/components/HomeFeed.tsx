<<<<<<< HEAD
import { usePosts } from '../hooks/useFetchPosts'
import Post from './Post'

export default function HomeFeed() {
  const { data: posts, isLoading, error } = usePosts()

  if (isLoading) return <p>Loading posts...</p>
  if (error)
    return <p className="text-red-500">Something went wrong loading posts.</p>
=======
import WeatherWidget from './WeatherWidget.tsx'
>>>>>>> dev

function HomeFeed() {
  return (
<<<<<<< HEAD
    <div className="space-y-6">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
=======
    <>
      <div className="app">
        <p>Just a placeholder homefeed</p>
        <WeatherWidget />
      </div>
    </>
  )
}

export default HomeFeed
>>>>>>> dev
