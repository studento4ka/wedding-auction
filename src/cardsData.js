export const CARDS = [
  {
    id: 1,
    title: "VIP-гість без попередження",
    rarity: "Звичайна",
    rarityLevel: "COMMON",
    description: "Має право приходити до молодят у гості без попередження в будь-який час.",
    perks: [
      { icon: "☕", text: "Кава, чай та печиво гарантовані" }
    ],
    image: "/cards/guest.png",
    theme: {
      cardBg: "from-[#0f2b5c] via-[#1a448a] to-[#0c1f42]",
      badgeBg: "bg-gradient-to-r from-blue-700 via-sky-500 to-blue-700 text-white border-sky-300/80 shadow-[0_0_15px_rgba(56,189,248,0.7),inset_0_1px_2px_rgba(255,255,255,0.6)]",
      descColor: "text-sky-100 drop-shadow-[0_2px_8px_rgba(14,165,233,0.4)]",
      perkTextColor: "text-cyan-200",
      dividerColor: "via-sky-400/50",
      titleColor: "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]",
      glowColor: "rgba(37, 99, 235, 0.55)",
      sparkColor: "#60a5fa"
    }
  },
  {
    id: 2,
    title: "Подруга на шопінг",
    rarity: "Рідкісна",
    rarityLevel: "RARE",
    description: "Завжди готова піти на шопінг разом з нареченою та підтвердити: «Так, ця покупка була абсолютно необхідна!»",
    perks: [
      { icon: "🛍️", text: "Право вето на будь-які сумніви" }
    ],
    image: "/cards/shopping.png",
    theme: {
      cardBg: "from-[#b45309] via-[#d97706] to-[#78350f]",
      badgeBg: "bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 text-stone-950 font-black border-amber-200 shadow-[0_0_18px_rgba(251,191,36,0.8),inset_0_1px_2px_rgba(255,255,255,0.8)]",
      descColor: "text-amber-100 drop-shadow-[0_2px_8px_rgba(251,191,36,0.4)]",
      perkTextColor: "text-yellow-200",
      dividerColor: "via-amber-300/50",
      titleColor: "text-amber-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]",
      glowColor: "rgba(245, 158, 11, 0.6)",
      sparkColor: "#fbbf24"
    }
  },
  {
    id: 3,
    title: "Друг на пиво",
    rarity: "Рідкісна",
    rarityLevel: "RARE",
    description: "Офіційний напарник нареченого для важливих розмов за келихом пива.",
    perks: [
      { icon: "🔥", text: "Безлімітні душевні бесіди" }
    ],
    image: "/cards/beer.png",
    theme: {
      cardBg: "from-[#c2410c] via-[#ea580c] to-[#7c2d12]",
      badgeBg: "bg-gradient-to-r from-orange-600 via-amber-400 to-orange-600 text-stone-950 font-black border-amber-200 shadow-[0_0_18px_rgba(249,115,22,0.8),inset_0_1px_2px_rgba(255,255,255,0.8)]",
      descColor: "text-orange-100 drop-shadow-[0_2px_8px_rgba(251,146,60,0.4)]",
      perkTextColor: "text-amber-200",
      dividerColor: "via-orange-300/50",
      titleColor: "text-orange-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]",
      glowColor: "rgba(234, 88, 12, 0.6)",
      sparkColor: "#f97316"
    }
  },
  {
    id: 4,
    title: "Перший шматок весільного торта",
    rarity: "Епічна",
    rarityLevel: "EPIC",
    description: "Отримує перший шматочок торта безпосередньо з рук молодят.",
    perks: [
      { icon: "📸", text: "Особливе фото на пам'ять з молодятами" }
    ],
    image: "/cards/cake.png",
    theme: {
      cardBg: "from-[#581c87] via-[#7e22ce] to-[#3b0764]",
      badgeBg: "bg-gradient-to-r from-purple-700 via-fuchsia-400 to-purple-700 text-white font-extrabold border-fuchsia-200 shadow-[0_0_18px_rgba(217,70,239,0.8),inset_0_1px_2px_rgba(255,255,255,0.7)]",
      descColor: "text-fuchsia-100 drop-shadow-[0_2px_8px_rgba(232,121,249,0.45)]",
      perkTextColor: "text-fuchsia-200",
      dividerColor: "via-fuchsia-400/50",
      titleColor: "text-fuchsia-50 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]",
      glowColor: "rgba(168, 85, 247, 0.65)",
      sparkColor: "#c084fc"
    }
  },
  {
    id: 5,
    title: "Майбутній кум / кума",
    rarity: "Легендарна",
    rarityLevel: "LEGENDARY",
    description: "Офіційна бронь ролі майбутнього хрещеного батька чи матері.",
    perks: [
      { icon: "👑", text: "Почесне місце на всіх святах" }
    ],
    image: "/cards/godparents.png",
    theme: {
      cardBg: "from-[#b91c1c] via-[#b45309] to-[#4c1d95]",
      badgeBg: "bg-gradient-to-r from-amber-400 via-rose-500 via-fuchsia-500 to-amber-300 text-white font-black border-amber-200 shadow-[0_0_22px_rgba(251,191,36,0.9),inset_0_1px_3px_rgba(255,255,255,0.9)] animate-pulse",
      descColor: "text-amber-100 drop-shadow-[0_2px_12px_rgba(252,211,77,0.5)]",
      perkTextColor: "text-amber-200",
      dividerColor: "via-amber-300/60",
      titleColor: "text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]",
      glowColor: "rgba(251, 191, 36, 0.8)",
      sparkColor: "#fde047"
    }
  }
];