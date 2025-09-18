import { Login } from '@/app/login/_components/login'

export const metadata = {
  title: 'Login — Simple Login',
  description: 'Sign in to your Simple Login account to access the dashboard and manage your settings.',
  openGraph: {
    title: 'Login — Simple Login',
    description: 'Sign in to your Simple Login account to access the dashboard and manage your settings.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Simple Login',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Login — Simple Login',
    description: 'Sign in to your Simple Login account to access the dashboard and manage your settings.'
  },
  robots: {
    index: false,
    follow: false
  }
}

export default function Page() {
  return (
    <div className="flex h-dvh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Login />
      </div>
    </div>
  )
}
