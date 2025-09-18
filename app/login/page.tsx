import { Login } from '@/app/login/_components/login'

export default function Page() {
  return (
    <div className="flex h-dvh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Login />
      </div>
    </div>
  )
}
