// Storage utilities

export interface StorageOptions {
  prefix?: string
  serialize?: (value: any) => string
  deserialize?: (value: string) => any
}

class StorageManager {
  protected prefix: string
  protected serialize: (value: any) => string
  protected deserialize: (value: string) => any

  constructor(options: StorageOptions = {}) {
    this.prefix = options.prefix || 'app_'
    this.serialize = options.serialize || JSON.stringify
    this.deserialize = options.deserialize || JSON.parse
  }

  protected getKey(key: string): string {
    return `${this.prefix}${key}`
  }

  set(key: string, value: any): void {
    try {
      const serializedValue = this.serialize(value)
      localStorage.setItem(this.getKey(key), serializedValue)
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = localStorage.getItem(this.getKey(key))
      if (item === null) {
        return defaultValue || null
      }
      return this.deserialize(item)
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return defaultValue || null
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(this.getKey(key))
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  }

  clear(): void {
    try {
      const keys = Object.keys(localStorage)
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.error('Error clearing localStorage:', error)
    }
  }

  exists(key: string): boolean {
    return localStorage.getItem(this.getKey(key)) !== null
  }

  getAll(): Record<string, any> {
    const result: Record<string, any> = {}
    try {
      const keys = Object.keys(localStorage)
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          const originalKey = key.replace(this.prefix, '')
          result[originalKey] = this.get(originalKey)
        }
      })
    } catch (error) {
      console.error('Error getting all localStorage items:', error)
    }
    return result
  }
}

// Session storage manager
class SessionStorageManager extends StorageManager {
  constructor(options: StorageOptions = {}) {
    super(options)
  }

  set(key: string, value: any): void {
    try {
      const serializedValue = this.serialize(value)
      sessionStorage.setItem(this.getKey(key), serializedValue)
    } catch (error) {
      console.error('Error saving to sessionStorage:', error)
    }
  }

  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = sessionStorage.getItem(this.getKey(key))
      if (item === null) {
        return defaultValue || null
      }
      return this.deserialize(item)
    } catch (error) {
      console.error('Error reading from sessionStorage:', error)
      return defaultValue || null
    }
  }

  remove(key: string): void {
    try {
      sessionStorage.removeItem(this.getKey(key))
    } catch (error) {
      console.error('Error removing from sessionStorage:', error)
    }
  }

  clear(): void {
    try {
      const keys = Object.keys(sessionStorage)
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          sessionStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.error('Error clearing sessionStorage:', error)
    }
  }

  exists(key: string): boolean {
    return sessionStorage.getItem(this.getKey(key)) !== null
  }

  getAll(): Record<string, any> {
    const result: Record<string, any> = {}
    try {
      const keys = Object.keys(sessionStorage)
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          const originalKey = key.replace(this.prefix, '')
          result[originalKey] = this.get(originalKey)
        }
      })
    } catch (error) {
      console.error('Error getting all sessionStorage items:', error)
    }
    return result
  }
}

// Create default instances
export const localStorageManager = new StorageManager({
  prefix: 'ai_studio_'
})

export const sessionStorageManager = new SessionStorageManager({
  prefix: 'ai_studio_session_'
})

// Convenience exports
export const storage = {
  local: localStorageManager,
  session: sessionStorageManager
}

// Cookie utilities
export const cookies = {
  set(name: string, value: string, days?: number): void {
    let expires = ''
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + value + expires + '; path=/'
  },

  get(name: string): string | null {
    const nameEQ = name + '='
    const ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  },

  remove(name: string): void {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  }
}
