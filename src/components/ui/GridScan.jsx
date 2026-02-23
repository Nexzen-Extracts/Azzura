import { useEffect, useRef } from "react";

function GridScan({
  lineColor = "#1F3A5F",
  glowColor = "#A3B5C0",
  gridSize = 40,
  speed = 0.02
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    let offset = 0;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Background gradient (depth feel)
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#081421");
      bg.addColorStop(0.5, "#0B1A2B");
      bg.addColorStop(1, "#081421");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      ctx.save();

      // Perspective transform
      ctx.translate(w / 2, h * 0.65);
      ctx.scale(1, 0.6);

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;

      // Horizontal lines (moving forward)
      for (let i = 0; i < 40; i++) {
        const y = (i * gridSize + offset) % (gridSize * 40);
        const perspective = 1 - y / (gridSize * 40);

        ctx.beginPath();
        ctx.moveTo(-w, -y * perspective);
        ctx.lineTo(w, -y * perspective);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = -w; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x * 0.2, -h);
        ctx.stroke();
      }

      ctx.restore();

      // Center cinematic glow beam
      const glow = ctx.createLinearGradient(0, h * 0.3, 0, h * 0.7);
      glow.addColorStop(0, "transparent");
      glow.addColorStop(0.5, glowColor);
      glow.addColorStop(1, "transparent");

      ctx.fillStyle = glow;
      ctx.globalAlpha = 0.15;
      ctx.fillRect(0, h * 0.3, w, h * 0.4);

      offset += speed * gridSize;

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resize);
  }, [lineColor, glowColor, gridSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

export default GridScan;