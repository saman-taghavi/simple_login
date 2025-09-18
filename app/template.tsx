import { AuthCheck } from '@/providers/auth'

export default function Template({ children }: { children: React.ReactNode }) {
  return <AuthCheck>{children}</AuthCheck>
}
