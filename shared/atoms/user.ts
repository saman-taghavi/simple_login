import type { Welcome } from '@/app/login/_query/query.types'
import { localAndCookieStorage } from '@/lib/atoms/storageHelpers'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const USER_DEFAULT: Pick<Welcome['results']['0'], 'email' | 'name' | 'picture'> = {
  name: { first: '', last: '', title: '' },
  email: '',
  picture: { large: '', medium: '', thumbnail: '' }
}
export const USER_ATOM_KEY = 'user'
const mixedStorage = createJSONStorage<typeof USER_DEFAULT>(() => localAndCookieStorage)
export const USER_ATOM = atomWithStorage(USER_ATOM_KEY, USER_DEFAULT, mixedStorage)
