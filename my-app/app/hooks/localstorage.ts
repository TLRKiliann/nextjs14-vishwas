//"use client";

import { useEffect, useState, useMemo } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {

  const initialState = {
    access: typeof window !== "undefined" ? window.localStorage.getItem('access') : false,
    refresh: typeof window !== "undefined" ?  window.localStorage.getItem('refresh') : false,
    isAuthenticated: null,
    user: null
  }

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
