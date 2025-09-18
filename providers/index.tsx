import { AuthCheck } from '@/providers/basicAuth'
import { QueryProvider } from '@/providers/query'
import type { FC, ReactNode } from 'react'

export const Providers: FC<{
  children: ReactNode
}> = ({ children }) => {
  return <QueryProvider>{children}</QueryProvider>
}
