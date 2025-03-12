'use client'

import { useEffect } from "react"

// 에러페이지는 클라이언트 컴포넌트로

type Props = {
  error: Error
  reset:()=>void
}

export default function Error({ error }: Props) {
  useEffect(() => {
    console.error(error.message)
  }, [])
  
  return <h1>에러 💥</h1>
}