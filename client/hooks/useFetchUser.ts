import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllUsers, getUserById } from '../apis/users.ts'

export function useGetAllUsers() {
  const query = useQuery({ queryKey: ['users'], queryFn: getAllUsers })
  return query
}

export const useGetUserById = (id: number) =>
  useQuery({
    queryKey: ['users', id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  })
