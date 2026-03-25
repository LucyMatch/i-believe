import { useRef, useState, useEffect, useCallback } from 'react'

const COLORS = ['#000000', '#d63c3c', '#3c6fd6', '#2ea844', '#e8c22a', '#e07c2a']
const PEN_SIZE = 3
const ERASER_SIZE = 14

export const FishDrawing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const lastPos = useRef<{ x: number; y: number } | null>(null)
  const [color, setColor] = useState(COLORS[0])
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  const getPos = (e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return null
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    if ('touches' in e) {
      if (e.touches.length === 0) return null
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      }
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }

  const draw = useCallback((pos: { x: number; y: number }) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'source-over'
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = ERASER_SIZE
    } else {
      ctx.globalCompositeOperation = 'source-over'
      ctx.strokeStyle = color
      ctx.lineWidth = PEN_SIZE
    }
    ctx.beginPath()
    if (lastPos.current) {
      ctx.moveTo(lastPos.current.x, lastPos.current.y)
    } else {
      ctx.moveTo(pos.x, pos.y)
    }
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
    lastPos.current = pos
  }, [color, tool])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const onDown = (e: MouseEvent | TouchEvent) => {
      e.preventDefault()
      drawing.current = true
      lastPos.current = null
      const pos = getPos(e)
      if (pos) draw(pos)
    }
    const onMove = (e: MouseEvent | TouchEvent) => {
      e.preventDefault()
      if (!drawing.current) return
      const pos = getPos(e)
      if (pos) draw(pos)
    }
    const onUp = () => {
      drawing.current = false
      lastPos.current = null
    }

    canvas.addEventListener('mousedown', onDown)
    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('mouseup', onUp)
    canvas.addEventListener('mouseleave', onUp)
    canvas.addEventListener('touchstart', onDown, { passive: false })
    canvas.addEventListener('touchmove', onMove, { passive: false })
    canvas.addEventListener('touchend', onUp)
    return () => {
      canvas.removeEventListener('mousedown', onDown)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseup', onUp)
      canvas.removeEventListener('mouseleave', onUp)
      canvas.removeEventListener('touchstart', onDown)
      canvas.removeEventListener('touchmove', onMove)
      canvas.removeEventListener('touchend', onUp)
    }
  }, [draw])

  const clear = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <div className="fish-drawing">
      <p className="fish-instruction">draw a fish.</p>
      <div className="fish-palette">
        {COLORS.map(c => (
          <button
            key={c}
            className={`fish-color${color === c && tool === 'pen' ? ' active' : ''}`}
            style={{ background: c }}
            onMouseDown={e => { e.stopPropagation(); setColor(c); setTool('pen') }}
          />
        ))}
        <button
          className={`fish-tool${tool === 'eraser' ? ' active' : ''}`}
          onMouseDown={e => { e.stopPropagation(); setTool('eraser') }}
        >
          eraser
        </button>
        <button className="fish-tool" onMouseDown={e => { e.stopPropagation(); clear() }}>
          clear
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={260}
        height={180}
        className="fish-canvas"
        style={{ cursor: tool === 'eraser' ? 'cell' : 'crosshair' }}
      />
    </div>
  )
}
