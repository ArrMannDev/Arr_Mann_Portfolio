import { useEffect, useRef } from "react";

export const SmokeCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const particles: Particle[] = [];
    const mouse = { x: -100, y: -100 };

    const getCursorColor = () => {
      const style = getComputedStyle(document.documentElement);
      const color = style.getPropertyValue("--color-cursor").trim();
      return color || "120, 120, 120";
    };

    let baseColor = getCursorColor();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 20 + 10;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5 - 1;
        this.maxLife = 100;
        this.life = this.maxLife;
        this.color = baseColor;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.98;
        this.life--;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${this.color}, 0.6)`; // More solid color
        ctx.globalAlpha = this.life / this.maxLife;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // Spawn particles on move
      for (let i = 0; i < 2; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Periodically update color in case theme changed
      if (Math.random() < 0.02) {
        baseColor = getCursorColor();
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].life <= 0 || particles[i].size <= 0.5) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 dark:mix-blend-screen mix-blend-multiply opacity-80 dark:opacity-40"
      style={{ touchAction: "none" }}
    />
  );
};
