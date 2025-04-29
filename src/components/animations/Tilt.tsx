"use client"

import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';

interface TiltProps {
    children: React.ReactNode;
  }
  

const Tilt = ({ children } : TiltProps) => {
    const tiltRef = useRef<HTMLDivElement>(null);
    
      useEffect(() => {
        const tiltElement = tiltRef.current;
    
        if (tiltElement) {
          tiltElement.vanillaTilt = VanillaTilt.init(tiltElement, {
            max: 10,
            speed: 400,
            gyroscope: false
            // glare: true,
            // "max-glare": 0.5
          });
        }
    
        return () => {
          if (tiltElement) {
            tiltElement?.vanillaTilt?.destroy();
          }
        };
      }, []);
  return (
    <span ref={tiltRef} className='w-full'>
        { children }
    </span>
  )
}

export default Tilt