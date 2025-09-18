import { GET_USER } from '@/app/login/_query/constants'
import { LOGIN_KEYS } from '@/app/login/_query/query.keys'
import type { Welcome } from '@/app/login/_query/query.types'
import { useMutation } from '@tanstack/react-query'

const getUser = async ({ phoneNumber }: { phoneNumber: string }): Promise<Welcome> => {
  const res = await fetch(GET_USER)
  if (res.ok) {
    return res.json() as Promise<Welcome>
  }
  return Promise.reject(new Error(`Failed to fetch user here is user phone: ${phoneNumber}`))
}

export const useUserLogin = () => {
  return useMutation({
    mutationKey: LOGIN_KEYS.GET_USER(),
    mutationFn: getUser
  })
}
