import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
  QueryKey
} from '@tanstack/react-query'
import { getAllPosts} from '../apis/posts.ts'

export function usePosts() {
  const query = useQuery({ queryKey: ['posts'], queryFn: getAllPosts })
  return query
    // Extra queries go here e.g. addFruit: useAddFruit()
  
}

export function usePostsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] as QueryKey })
    },
  })

  return mutation
}


