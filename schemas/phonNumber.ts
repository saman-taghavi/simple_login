import { isValidIranianMobile, normalizeIranianMobile } from '@/lib/validations'
import { z } from 'zod'

export const PHONE_SCHEMA = z.object({
  phoneNumber: z
    .string()
    .transform((val) => {
      const normalized = normalizeIranianMobile(val)
      return normalized ?? val
    })
    .refine(isValidIranianMobile, 'please enter a valid phone number')
})
export type PHONE_SCHEMA = z.infer<typeof PHONE_SCHEMA>
