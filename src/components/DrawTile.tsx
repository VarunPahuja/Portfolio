import { useRef, useCallback, useEffect, useContext } from "react";
import { CanvasContext } from "./DraggableCanvas";

const DrawTile = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const { setIsInteractingWithTile } = useContext(CanvasContext);

  const getPos = useCallback((e: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ("touches" in e) {
      const touch = e.touches[0];
      return { x: (touch.clientX - rect.left) * scaleX, y: (touch.clientY - rect.top) * scaleY };
    }
    return { x: ((e as React.MouseEvent).clientX - rect.left) * scaleX, y: ((e as React.MouseEvent).clientY - rect.top) * scaleY };
  }, []);

  const startDraw = useCallback((e: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    e.stopPropagation();
    isDrawing.current = true;
    setIsInteractingWithTile(true);
    lastPos.current = getPos(e);
  }, [getPos, setIsInteractingWithTile]);

  const draw = useCallback((e: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    if (!isDrawing.current || !lastPos.current) return;
    e.stopPropagation();
    if (e.cancelable) e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    const pos = getPos(e);
    requestAnimationFrame(() => {
      ctx.beginPath();
      ctx.moveTo(lastPos.current!.x, lastPos.current!.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.strokeStyle = "rgba(30, 30, 30, 0.75)";
      ctx.lineWidth = 14;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
      lastPos.current = pos;
    });
  }, [getPos]);

  const stopDraw = useCallback((e?: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    if (e) e.stopPropagation();
    isDrawing.current = false;
    setIsInteractingWithTile(false);
    lastPos.current = null;
  }, [setIsInteractingWithTile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 800;
    canvas.height = 800;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-crosshair touch-none block"
      onMouseDown={startDraw}
      onMouseMove={draw}
      onMouseUp={stopDraw}
      onMouseLeave={stopDraw}
      onTouchStart={startDraw}
      onTouchMove={draw}
      onTouchEnd={stopDraw}
      onPointerDown={(e) => e.stopPropagation()}
    />
  );
};

export default DrawTile;
