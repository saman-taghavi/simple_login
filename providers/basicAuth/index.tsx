import { USER_ATOM_KEY } from '@/shared/atoms/user'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { use, type PropsWithChildren } from 'react'

export const AuthCheck = ({ children }: PropsWithChildren) => {
  const headersList = use(headers())
  const pathname = headersList.get('x-pathname')
  const user = use(cookies()).get(USER_ATOM_KEY)
  if (!user && !pathname?.startsWith('/login')) {
    redirect('/login')
  }
  return <>{children}</>
}
