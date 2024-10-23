import { useRef, useEffect } from 'react'

const MAX_WIND_GUSTS = 12
const WIND_SPEEDS = [1, 2, 3]
const WIND_LENGTH = 100
const INITIAL_POSITION_OFFSET = 100

export default function RandomWindAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const w = (canvas.width = window.innerWidth)
    const h = (canvas.height = window.innerHeight)

    const createWindGusts = (numGusts: number) => {
      return Array.from({ length: numGusts }, () => ({
        positionX: w + Math.random() * INITIAL_POSITION_OFFSET,
        positionY: Math.random() * h,
        length: Math.random() * WIND_LENGTH + 50,
        speed: WIND_SPEEDS[Math.floor(Math.random() * WIND_SPEEDS.length)],
      }))
    }

    const wind = createWindGusts(MAX_WIND_GUSTS)

    const drawLine = () => {
      context.clearRect(0, 0, w, h)
      context.strokeStyle = 'rgba(255, 255, 255, 0.8)'
      context.lineWidth = 2

      wind.forEach(gust => {
        context.beginPath()
        context.moveTo(gust.positionX, gust.positionY)
        context.lineTo(gust.positionX - gust.length, gust.positionY)
        context.stroke()

        gust.positionX -= gust.speed

        if (gust.positionX < -gust.length) {
          gust.positionX = w + Math.random() * INITIAL_POSITION_OFFSET
          gust.positionY = Math.random() * h
          gust.length = Math.random() * WIND_LENGTH + 50
          gust.speed =
            WIND_SPEEDS[Math.floor(Math.random() * WIND_SPEEDS.length)]
        }
      })

      requestAnimationFrame(drawLine)
    }

    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    drawLine()

    window.addEventListener('resize', resizeCanvas)
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ display: 'block' }} />
}
