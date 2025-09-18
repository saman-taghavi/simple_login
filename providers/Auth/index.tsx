'use client'

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { USER_ATOM } from '@/shared/atoms/user'
import { useAtomValue } from 'jotai/react'
import { useRouter } from 'next/navigation'
import type { PropsWithChildren } from 'react'

export const AuthCheck = ({ children }: PropsWithChildren) => {
  const user = useAtomValue(USER_ATOM)
  const router = useRouter()
  useIsomorphicLayoutEffect(() => {
    if (!user.name) {
      router.replace('/login')
    }
  }, [router, user.name])
  return <>{children}</>
}
