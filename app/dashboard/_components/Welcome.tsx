'use client'

import { USER_ATOM } from '@/shared/atoms/user'
import { useAtom } from 'jotai/react'

export const Welcome = () => {
  const [user] = useAtom(USER_ATOM)
  return <div>Welcome to the dashboard! {user.email}</div>
}
