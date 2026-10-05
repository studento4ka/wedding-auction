import React, { useState, useEffect, useCallback } from 'react';
import { CARDS } from './cardsData';
import SparklesCanvas from './SparklesCanvas';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [displayCard, setDisplayCard] = useState(CARDS[0]);
  const [burstKey, setBurstKey] = useState(0);

  const handleNext = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);

    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % CARDS.length;
      setCurrentIndex(nextIndex);
      setDisplayCard(CARDS[nextIndex]);
      setBurstKey((prev) => prev + 1);
    }, 270);

    setTimeout(() => {
      setIsSpinning(false);
    }, 550);
  }, [currentIndex, isSpinning]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['Space', 'Enter', 'ArrowRight', 'ArrowDown'].includes(e.code)) {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext]);

  const renderCardTitle = (title) => {
    if (title.includes('Майбутній кум / кума')) {
      return (
        <>
          <span>Майбутній</span>
          <span className="block text-[20px] md:text-[22px] tracking-[0.06em] mt-0.5">
            кум / кума
          </span>
        </>
      );
    }
    return title;
  };

  return (
    <div
      onClick={handleNext}
      className="relative w-screen h-screen overflow-hidden flex flex-col justify-between items-center py-4 sm:py-6 px-4 cursor-pointer select-none transition-colors duration-1000 ease-out"
      style={{
        background: `radial-gradient(circle at 50% 50%, ${displayCard.theme.glowColor} 0%, rgba(255,255,255,0.85) 45%, #e8e0d5 100%)`
      }}
    >
      {/* Живий фон зірочок у колір поточної картки */}
      <SparklesCanvas
        burstTrigger={burstKey}
        rarityLevel={displayCard.rarityLevel}
        rarityColor={displayCard.theme.sparkColor}
      />

      {/* М'яка глибинна світлова хвиля за карткою */}
      <div
        className="absolute w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full blur-[140px] opacity-60 pointer-events-none transition-all duration-1000 ease-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: displayCard.theme.glowColor }}
      />

      {/* Твій оригінальний заголовок із Cormorant Garamond */}
      <header className="z-10 flex items-center justify-center gap-4 shrink-0 my-auto">
        <span className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent via-[#b5894b] to-[#b5894b]" />
        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-[#1f1f1f] tracking-[0.06em] font-normal drop-shadow-xs"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Весільний Аукціон
        </h1>
        <span className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent via-[#b5894b] to-[#b5894b]" />
      </header>

      {/* Центрований адаптивний блок картки */}
      <div className="z-10 flex items-center justify-center my-auto perspective-1000 w-full flex-1 max-h-[78vh]">
        <div
          className={`relative w-[min(380px,88vw)] h-[70vh] min-h-[440px] max-h-[580px] rounded-[32px] p-5 sm:p-6 transition-all duration-550 ease-in-out overflow-hidden flex flex-col justify-between bg-gradient-to-b ${displayCard.theme.cardBg}`}
          style={{
            transform: isSpinning ? 'rotateY(360deg) scale(0.92)' : 'rotateY(0deg) scale(1)',
            boxShadow: `0 30px 60px -10px rgba(0, 0, 0, 0.4), 0 0 40px ${displayCard.theme.glowColor}`
          }}
        >
          {/* М'який весільний світловий відблиск */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/15 rounded-full blur-2xl pointer-events-none" />

          {/* 1. Живий, об'ємний бейдж рідкості */}
          <div className="relative z-10 flex items-center justify-center shrink-0">
            <span
              className={`text-[11px] px-5 py-1 rounded-full uppercase tracking-[0.28em] border ${displayCard.theme.badgeBg}`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {displayCard.rarity}
            </span>
          </div>

          {/* 2. Арт безпосередньо на тлі картки */}
          <div className="relative z-10 my-auto w-full flex flex-col items-center flex-1 justify-center min-h-0 py-1">
            <div className="w-full h-full max-h-[34vh] flex items-center justify-center p-2">
              <img
                src={displayCard.image}
                alt={displayCard.title}
                className="w-full h-full object-contain select-none pointer-events-none filter contrast-105"
              />
            </div>

            {/* Назва статусу */}
            <h2
              className="mt-3.5 text-center text-[22px] md:text-[24px] font-bold tracking-[0.04em] uppercase text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] leading-tight shrink-0"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {renderCardTitle(displayCard.title)}
            </h2>
          </div>

          {/* 3. Опис і рівно один ключовий привілей */}
          <div className="relative z-10 flex flex-col items-center text-center px-3 py-1 shrink-0">
            <p
              className={`text-[14px] md:text-[15.5px] font-semibold leading-relaxed tracking-wide ${displayCard.theme.descColor}`}
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              «{displayCard.description}»
            </p>

            {/* Витончена світлова риска */}
            <div className={`w-20 h-px bg-gradient-to-r from-transparent ${displayCard.theme.dividerColor} to-transparent my-2.5`} />

            {/* Єдиний чіткий привілей з виразним емодзі */}
            <div className="flex items-center gap-2 text-[12.5px] md:text-[13.5px] font-medium tracking-[0.02em] drop-shadow-xs">
              <span className="text-base filter drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
                {displayCard.perks[0].icon}
              </span>
              <span className={displayCard.theme.perkTextColor}>
                {displayCard.perks[0].text}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Нижній відступ для симетрії */}
      <div className="h-1 shrink-0" />
    </div>
  );
}