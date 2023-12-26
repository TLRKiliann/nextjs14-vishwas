"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {

  const [value, setValue] = useState<T>(() => {
    
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}
/*
import React, { useDebugValue, useEffect, useState } from "react"

const useLocalStorage = <S>(
  key: string,
  initialState?: S | (() => S)
): [S, React.Dispatch<React.SetStateAction<S>>] => {
  const [state, setState] = useState<S>(initialState as S)
  useDebugValue(state)

  useEffect(() => {
    const item = localStorage.getItem(key)
    if (item) setState(parse(item))
  }, [])

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [state])

  return [state, setState]
}

const parse = (value: string) => {
  try {
    return JSON.parse(value)
  } catch {
    return value
  }
}

export default useLocalStorage
*/