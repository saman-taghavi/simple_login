'use client'
import { useUserLogin } from '@/app/login/_query'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { PHONE_SCHEMA } from '@/schemas/phonNumber'
import { USER_ATOM } from '@/shared/atoms/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAtomValue, useSetAtom } from 'jotai/react'
import { useRouter } from 'next/navigation'
import type { ComponentPropsWithoutRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const Login = ({ className, ...props }: ComponentPropsWithoutRef<'div'>) => {
  const router = useRouter()
  const { mutateAsync, isError, isPending } = useUserLogin()
  const setUser = useSetAtom(USER_ATOM)
  const form = useForm({
    defaultValues: {
      phoneNumber: ''
    },
    resolver: zodResolver(PHONE_SCHEMA)
  })
  const onSubmitError: Parameters<typeof form.handleSubmit>[1] = (e) => {
    toast.error(e.phoneNumber?.message)
  }
  const onSubmit: Parameters<typeof form.handleSubmit>[0] = async (data) => {
    await mutateAsync(data, {
      onSuccess: (data) => {
        toast.success(`Welcome ${data.results[0].name.first}`)
        setUser({
          name: data.results[0].name,
          email: data.results[0].email,
          picture: data.results[0].picture
        })
        router.push('/dashboard')
      },
      onError: () => {
        toast.error('Login failed. Please try again.')
      }
    })
  }
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your phone Number</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onSubmitError)}>
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
