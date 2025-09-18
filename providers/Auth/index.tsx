'use client'

import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { useRouter } from 'next/navigation'
import type { PropsWithChildren } from 'react'

export const AuthCheck = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  useIsomorphicLayoutEffect(() => {
    router.replace('/login')
  }, [router])
  return <>{children}</>
}
