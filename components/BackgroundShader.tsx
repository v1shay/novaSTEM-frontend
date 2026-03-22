"use client"

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export function BackgroundShader() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <ShaderGradientCanvas
        pixelDensity={1}
        fov={45}
        className="h-full w-full"
      >
        <ShaderGradient
          animate="on"
          cAzimuthAngle={180}
          cDistance={3.9}
          cPolarAngle={115}
          color1="#008b00"
          color2="#c1d3b8"
          color3="#6dcd8b"
          envPreset="city"
          grain="off" // Toggle grain here: "on" or "off"
          lightType="3d"
          positionX={-0.5}
          positionY={0.1}
          positionZ={0}
          reflection={0.1}
          rotationX={0}
          rotationY={0}
          rotationZ={235}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.1}
          uFrequency={5.5}
          uSpeed={0.5}
          uStrength={2.4}
          uTime={0.2}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  )
}
