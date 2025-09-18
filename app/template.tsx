import { AuthCheck } from '@/providers/basicAuth'

export default function Template({ children }: { children: React.ReactNode }) {
  return <AuthCheck>{children}</AuthCheck>
}
