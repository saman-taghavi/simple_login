import Stats from '@/components/stats'

export const metadata = {
  title: 'Welcome to dashboard — Simple Login',
  description: 'Overview and key metrics for your Simple Login account. Quick insights into usage, performance, and recent activity.',
  openGraph: {
    title: 'Welcome to dashboard — Simple Login',
    description: 'Overview and key metrics for your Simple Login account. Quick insights into usage, performance, and recent activity.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Simple Login',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welcome to dashboard — Simple Login',
    description: 'Overview and key metrics for your Simple Login account. Quick insights into usage, performance, and recent activity.'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function Page() {
  return <Stats />
}
