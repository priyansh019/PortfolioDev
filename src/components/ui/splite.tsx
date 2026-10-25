'use client'

import React, { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center min-h-[300px]">
          <div className="flex flex-col items-center gap-2">
            <span className="w-8 h-8 border-2 border-[#DAF1DE]/20 border-t-[#DAF1DE] rounded-full animate-spin"></span>
            <span className="text-[11px] font-mono text-[#8EB69B] uppercase tracking-widest">Loading 3D Canvas...</span>
          </div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
