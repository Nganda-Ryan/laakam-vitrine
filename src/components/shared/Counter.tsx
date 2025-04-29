"use client"
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
interface CounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}
export function Counter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
}: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null
    let animationFrame: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * end)
      setCount(currentCount)
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    animationFrame = requestAnimationFrame(animate)
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, inView])
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
