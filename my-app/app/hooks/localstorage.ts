/*import { useState, useMemo } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {

  const [value, setValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const jsonValue = window.localStorage.getItem(key)
      if (jsonValue != null) return JSON.parse(jsonValue)
    }

    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    } else {
      return initialValue
    }
  })

  useMemo(() => {
    if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, setValue] as const;
}
*/