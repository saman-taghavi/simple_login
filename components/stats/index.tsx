'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { USER_ATOM } from '@/shared/atoms/user'
import { useAtom } from 'jotai'
import { RESET } from 'jotai/utils'
import { Database, Eye, Gauge, Play, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface Stat {
  value: string
  title: string
  icon: ReactNode
}

interface StatsGridProps {
  stats: Stat[]
}

const StatisticCard: React.FC<Stat> = ({ value, title, icon }) => (
  <div className="space-y-2">
    {icon}
    <div className="text-3xl font-bold">{value}</div>
    <p className="text-muted-foreground text-sm">{title}</p>
  </div>
)

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <div className="grid grid-cols-2 place-items-center gap-8">
    {stats.map((stat, index) => (
      <StatisticCard key={index} {...stat} />
    ))}
  </div>
)

const Stats = () => {
  const statsData: Stat[] = [
    { value: '200%', title: 'More Speed', icon: <Database className="text-muted-foreground h-5 w-5" /> },
    { value: '21.2K', title: 'Total Ratings', icon: <Eye className="text-muted-foreground h-5 w-5" /> },
    { value: '10X', title: 'Efficiency Level', icon: <Gauge className="text-muted-foreground h-5 w-5" /> },
    { value: '1M', title: 'Total Users', icon: <Users className="text-muted-foreground h-5 w-5" /> }
  ]
  const [user, setUser] = useAtom(USER_ATOM)
  const router = useRouter()
  const logout = () => {
    setUser(RESET)
    router.push('/login')
  }
  return (
    <div className="w-full space-y-8 px-2 py-6">
      <Card className="mx-auto max-w-6xl rounded-3xl p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Let&apos;s build something great {user.name.first}</h2>
            <p className="text-muted-foreground">your eamil is: {user.email}</p>
          </div>
          <StatsGrid stats={statsData} />
        </div>

        <div className="mt-12 grid">
          <div className="flex flex-col justify-center gap-6 md:flex-row md:gap-10">
            <Button onClick={logout} className="rounded-2xl">
              logout
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Stats
