import React, { useEffect, useRef } from 'react';

export default function SparklesCanvas({ burstTrigger, rarityLevel, rarityColor }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const burstsRef = useRef([]);
  const rarityLevelRef = useRef(rarityLevel);
  const rarityColorRef = useRef(rarityColor);

  useEffect(() => {
    rarityLevelRef.current = rarityLevel;
    rarityColorRef.current = rarityColor;
  }, [rarityLevel, rarityColor]);

  // Палітра зірочок залежно від рангу картки
  const getPalette = (level, mainColor) => {
    if (level === 'LEGENDARY') {
      return ['#fde047', '#f43f5e', '#34d399', '#38bdf8', '#ffffff', '#fbbf24']; // градієнтний мультиколор
    }
    if (level === 'EPIC') {
      return ['#c084fc', '#e879f9', '#a855f7', '#f3e8ff', '#ffffff']; // фіолетові
    }
    if (level === 'RARE') {
      return [mainColor || '#fbbf24', '#f59e0b', '#fef08a', '#ffedd5', '#ffffff']; // золоті / помаранчеві
    }
    return ['#60a5fa', '#38bdf8', '#93c5fd', '#e0f2fe', '#ffffff']; // сині для COMMON
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Збільшено кількість фонових зірочок на екрані (110 штук)
    const ambientCount = 110;
    particlesRef.current = Array.from({ length: ambientCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight, // рівномірно заповнюємо екран від самого старту
      size: Math.random() * 3.2 + 1,
      speedY: Math.random() * 1.3 + 0.5,
      speedX: (Math.random() - 0.5) * 0.9,
      opacity: Math.random() * 0.85 + 0.2,
      pulse: Math.random() * 0.05 + 0.02,
      paletteIndex: Math.floor(Math.random() * 6)
    }));

    const drawSpark = (x, y, radius, color, alpha) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fillStyle = color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = color;
      
      ctx.beginPath();
      // 4-променева витончена зірочка
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(
          x + Math.cos((i * Math.PI) / 2) * radius,
          y + Math.sin((i * Math.PI) / 2) * radius
        );
        ctx.lineTo(
          x + Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (radius * 0.3),
          y + Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (radius * 0.3)
        );
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const activePalette = getPalette(rarityLevelRef.current, rarityColorRef.current);

      // 1. Постійні фонові зірочки
      particlesRef.current.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * p.pulse) * 0.02;

        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
          p.paletteIndex = Math.floor(Math.random() * activePalette.length);
        }

        const color = activePalette[p.paletteIndex % activePalette.length];
        drawSpark(p.x, p.y, p.size * 2, color, p.opacity);
      });

      // 2. Вибуховий фонтан зірочок при перевороті
      for (let i = burstsRef.current.length - 1; i >= 0; i--) {
        const b = burstsRef.current[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vy += 0.07;
        b.vx *= 0.985;
        b.alpha -= b.decay;
        b.size *= 0.988;

        drawSpark(b.x, b.y, b.size * 3.2, b.color, b.alpha);

        if (b.alpha <= 0) {
          burstsRef.current.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Спалах при зміні карти (160 зірочок)
  useEffect(() => {
    if (!burstTrigger) return;

    const count = 160;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const newSparks = [];
    const activePalette = getPalette(rarityLevel, rarityColor);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 11 + 4;
      newSparks.push({
        x: centerX + (Math.random() - 0.5) * 100,
        y: centerY + (Math.random() - 0.5) * 100,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.8,
        size: Math.random() * 3.8 + 2,
        color: activePalette[Math.floor(Math.random() * activePalette.length)],
        alpha: 1,
        decay: Math.random() * 0.018 + 0.012
      });
    }

    burstsRef.current.push(...newSparks);
  }, [burstTrigger, rarityLevel, rarityColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}