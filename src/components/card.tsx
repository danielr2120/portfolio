import type { ReactNode } from "react"

type CardProps={
  children: ReactNode,
  className?: string
}
export function Card({children, className = ""}: CardProps) {
  return (
    <div className= {`bg-[#F3F3F1]/80 border-border border rounded-3xl shadow-2xl p-6 backdrop-blur-md ${className}`}>
      {children}
       
    </div>
  )
}