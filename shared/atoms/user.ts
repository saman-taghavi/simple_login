import type { Welcome } from '@/app/login/_query/query.types'
import { atomWithStorage } from 'jotai/utils'

const USER_DEFAULT: Pick<Welcome['results']['0'], 'email' | 'name' | 'picture'> = {
  name: { first: '', last: '', title: '' },
  email: '',
  picture: { large: '', medium: '', thumbnail: '' }
}
export const USER_ATOM = atomWithStorage('user', USER_DEFAULT)
