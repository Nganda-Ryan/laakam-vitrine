"use client"

import React, { useEffect, useState, useRef } from 'react';
import { CounterProps } from '@/types';


function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
      },
    )
    if (countRef.current) {
      observer.observe(countRef.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])
  useEffect(() => {
    if (!isVisible) return
    let startTime: number | null = null
    let animationFrame: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * end)
      setCount(currentCount)
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }
    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])
  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  )
}
export function MetricsSection() {
  const metrics = [
    {
      value: 150,
      suffix: '+',
      label: 'Projects Completed',
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
    },
    {
      value: 15,
      suffix: '+',
      label: 'Years of Experience',
    },
    {
      value: 50,
      suffix: '+',
      label: 'Tech Experts',
    },
  ]
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Achievements
          </h2>
          <p className="text-lg opacity-90">
            Numbers that reflect our commitment to excellence and client
            success.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-lg opacity-90">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}