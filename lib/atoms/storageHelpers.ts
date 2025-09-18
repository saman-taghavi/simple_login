import type { SyncStringStorage } from 'jotai/vanilla/utils/atomWithStorage'

export const localAndCookieStorage: SyncStringStorage = {
  getItem: (key: string) => {
    return localStorage.getItem(key)
  },
  setItem: (key: string, value: string) => {
    try {
      // Sync to localStorage
      window.localStorage.setItem(key, value)
      // Set cookie client-side (7-day expiry)
      const expires = new Date(Date.now() + 7 * 864e5).toUTCString()
      document.cookie = `${key}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Strict`
    } catch (error) {
      console.error('Failed to set storage:', error)
    }
  },
  removeItem: (key) => {
    localStorage.removeItem(key)
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Strict`
  },
  subscribe: (key, cb) => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        cb(event.newValue)
        if (event.newValue === null) {
          // If the item was removed, also clear the cookie
          document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Strict`
        }
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }
}
