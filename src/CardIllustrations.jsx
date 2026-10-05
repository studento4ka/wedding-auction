import React from 'react';

export function CardArtwork({ type }) {
  switch (type) {
    case 'DoorOpen':
      // VIP-гість: відкритий дім молодят, м'яке світло та радісний гість
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="doorLightGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35"/>
              <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="160" cy="110" r="105" fill="url(#doorLightGlow)"/>
          
          {/* Арка гостинного дому */}
          <path d="M105 210 V110 C105 70 215 70 215 110 V210" stroke="#bae6fd" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
          <path d="M120 210 V120 C120 90 200 90 200 120 V210" fill="#ffffff" fillOpacity="0.25"/>

          {/* Силует гостя */}
          <circle cx="160" cy="115" r="16" fill="#ffffff"/>
          <path d="M138 160 C138 135 182 135 182 160 V210 H138 Z" fill="#ffffff"/>
          {/* Святковий букет/подарунок */}
          <circle cx="130" cy="150" r="10" fill="#f43f5e"/>
          <circle cx="138" cy="144" r="8" fill="#fbbf24"/>
          <circle cx="124" cy="142" r="8" fill="#38bdf8"/>
        </svg>
      );

    case 'ShoppingBag':
      // Подруга на шопінг: стильні силуети подруг із покупками без коричневого блоку
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="shopGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#fef08a" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="160" cy="110" r="100" fill="url(#shopGlow)"/>
          
          {/* Наречена у білому з вишуканою фатою */}
          <circle cx="132" cy="72" r="15" fill="#fef9c3"/>
          <path d="M122 66 C122 50 142 50 142 66" stroke="#ffffff" strokeWidth="3"/>
          <path d="M116 102 Q132 90 148 102 L158 205 H106 Z" fill="#ffffff"/>
          <path d="M120 62 Q105 95 110 140" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="3 3"/>

          {/* Стильна подруга в золотистій сукні */}
          <circle cx="188" cy="76" r="14" fill="#fde68a"/>
          <path d="M174 104 Q188 95 202 104 L210 205 H166 Z" fill="#fbbf24"/>

          {/* Фірмові пакети з покупками */}
          <rect x="80" y="135" width="34" height="42" rx="4" fill="#fef08a"/>
          <path d="M90 135 V125 C90 120 104 120 104 125 V135" stroke="#ffffff" strokeWidth="3"/>
          <rect x="208" y="132" width="38" height="46" rx="4" fill="#f472b6"/>
          <path d="M218 132 V122 C218 116 236 116 236 122 V132" stroke="#ffffff" strokeWidth="3"/>
        </svg>
      );

    case 'Beer':
      // Друг на пиво: щирий тост келихами без темних фонових рамок
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="beerAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.45"/>
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="160" cy="110" r="100" fill="url(#beerAura)"/>
          
          {/* Наречений (зліва) */}
          <circle cx="105" cy="85" r="17" fill="#ffedd5"/>
          <path d="M78 128 C78 106 132 106 132 128 V205 H78 Z" fill="#ffffff" fillOpacity="0.9"/>
          <path d="M120 122 L144 100" stroke="#ffedd5" strokeWidth="10" strokeLinecap="round"/>

          {/* Найкращий друг (справа) */}
          <circle cx="215" cy="85" r="17" fill="#ffedd5"/>
          <path d="M188 128 C188 106 242 106 242 128 V205 H188 Z" fill="#fed7aa"/>
          <path d="M200 122 L176 100" stroke="#ffedd5" strokeWidth="10" strokeLinecap="round"/>

          {/* Келихи у момент тосту */}
          <path d="M140 92 L144 116 H155 L159 92 Z" fill="#fef08a"/>
          <path d="M165 92 L161 116 H172 L176 92 Z" fill="#fef08a"/>
          {/* Золота піна й сяйво удару */}
          <circle cx="150" cy="88" r="6" fill="#ffffff"/>
          <circle cx="166" cy="88" r="6" fill="#ffffff"/>
          <path d="M158 72 V64 M148 75 L141 68 M168 75 L175 68" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );

    case 'Cake':
      // Перший шматок торта: розкішний білий торт з золотом прямо на картці
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="cakeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5d0fe" stopOpacity="0.45"/>
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="160" cy="115" r="95" fill="url(#cakeGlow)"/>

          {/* Триярусний весільний шедевр */}
          <rect x="105" y="148" width="110" height="48" rx="6" fill="#ffffff"/>
          <rect x="122" y="110" width="76" height="40" rx="6" fill="#fdf4ff"/>
          <rect x="138" y="78" width="44" height="34" rx="6" fill="#ffffff"/>

          {/* Золоті стрічки між ярусами */}
          <line x1="105" y1="160" x2="215" y2="160" stroke="#facc15" strokeWidth="2.5"/>
          <line x1="122" y1="122" x2="198" y2="122" stroke="#facc15" strokeWidth="2.5"/>

          {/* Перший відрізаний шматок на лопатці */}
          <path d="M218 126 L254 138 L238 152 Z" fill="#facc15"/>
          <path d="M212 134 L258 152" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round"/>

          {/* Серце на верхівці */}
          <path d="M160 62 C154 52 142 56 160 70 C178 56 166 52 160 62 Z" fill="#ec4899"/>
        </svg>
      );

    case 'Crown':
      // Майбутній кум / кума: теплий силует родини з немовлям у золотому світлі
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="familyAura" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="160" cy="110" r="105" fill="url(#familyAura)"/>

          {/* Майбутній кум */}
          <circle cx="95" cy="92" r="15" fill="#fef3c7"/>
          <path d="M72 134 C72 114 118 114 118 134 V205 H72 Z" fill="#ffffff" fillOpacity="0.85"/>

          {/* Молодята з дитятком по центру */}
          <circle cx="145" cy="82" r="14" fill="#ffffff"/>
          <path d="M128 120 C128 104 162 104 162 120 V205 H128 Z" fill="#ffffff"/>

          <circle cx="175" cy="85" r="13" fill="#ffffff"/>
          <path d="M160 122 C160 106 192 106 192 122 V205 H160 Z" fill="#fef3c7"/>

          {/* Сповите немовля на руках */}
          <ellipse cx="160" cy="144" rx="20" ry="13" fill="#ffffff"/>
          <circle cx="152" cy="140" r="5" fill="#fef3c7"/>
          <path d="M152 146 Q160 150 168 146" stroke="#f59e0b" strokeWidth="2.5" fill="none"/>

          {/* Майбутня кума */}
          <circle cx="225" cy="92" r="14" fill="#fef3c7"/>
          <path d="M202 134 C202 114 248 114 248 134 V205 H202 Z" fill="#ffffff" fillOpacity="0.85"/>

          {/* Золоте сяюче серце зверху */}
          <path d="M160 48 C153 38 138 43 160 62 C182 43 167 38 160 48 Z" fill="#fde047"/>
        </svg>
      );

    default:
      return null;
  }
}