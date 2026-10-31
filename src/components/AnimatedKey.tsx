import React from 'react';

export const AnimatedKey: React.FC = () => {
  return (
    <div className="relative w-full max-w-[340px] md:max-w-[420px] mx-auto aspect-square flex items-center justify-center select-none pointer-events-none">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F39C12]/20 via-[#FCC73E]/10 to-transparent rounded-full blur-3xl transform -scale-95 animate-pulse" />

      {/* Rotating Key SVG Container */}
      <div className="relative w-full h-full flex items-center justify-center transition-transform duration-700">
        <svg
          viewBox="0 0 300 300"
          className="w-4/5 h-4/5 drop-shadow-[0_15px_30px_rgba(243,156,18,0.25)] transform -rotate-12 hover:rotate-0 transition-transform duration-1000 ease-out"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCC73E" />
              <stop offset="40%" stopColor="#F39C12" />
              <stop offset="70%" stopColor="#C87F0A" />
              <stop offset="100%" stopColor="#F5B043" />
            </linearGradient>
            <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="darkAccents" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A5100" />
              <stop offset="100%" stopColor="#C87F0A" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Key bow (Handle) - Double ring with classic brass bevel */}
          <circle cx="85" cy="150" r="55" stroke="url(#goldGradient)" strokeWidth="18" fill="none" />
          <circle cx="85" cy="150" r="42" stroke="#002542" strokeWidth="3" fill="none" opacity="0.3" />
          
          {/* Keyhole inside bow */}
          <circle cx="85" cy="150" r="24" fill="#013C68" />
          <path d="M85 140 A10 10 0 0 0 78 156 L76 168 A3 3 0 0 0 79 172 H91 A3 3 0 0 0 94 168 L92 156 A10 10 0 0 0 85 140 Z" fill="url(#goldGradient)" />

          {/* Key Shaft / Blade */}
          <rect x="135" y="141" width="130" height="18" rx="4" fill="url(#goldGradient)" />
          
          {/* Highlight shine bar */}
          <rect x="136" y="143" width="128" height="3" rx="1.5" fill="url(#highlightGradient)" />

          {/* Key Bittings / Teeth */}
          <path
            d="M 195 159 
               L 195 185 A 3 3 0 0 0 198 188 L 205 188 A 2 2 0 0 0 207 186 L 207 159 
               L 217 159 
               L 217 178 A 3 3 0 0 0 220 181 L 227 181 A 2 2 0 0 0 229 179 L 229 159
               L 237 159 
               L 237 192 A 3 3 0 0 0 240 195 L 249 195 A 2 2 0 0 0 251 193 L 251 159
               L 258 159 
               L 258 174 A 3 3 0 0 0 261 177 L 265 177 L 265 150
               Z"
            fill="url(#goldGradient)"
          />

          {/* Key Tip Chamfer */}
          <path d="M 265 141 L 273 147 A 4 4 0 0 1 273 153 L 265 159 Z" fill="url(#darkAccents)" />

          {/* Longitudinal keyway wards (grooves along blade) */}
          <line x1="145" y1="147" x2="260" y2="147" stroke="#8A5100" strokeWidth="2" strokeLinecap="round" />
          <line x1="150" y1="152" x2="260" y2="152" stroke="#8A5100" strokeWidth="1.5" strokeLinecap="round" />

          {/* Subtle 40-year commemorative mark stamped on the key bow */}
          <text
            x="85"
            y="114"
            textAnchor="middle"
            fill="#013C68"
            fontSize="10"
            fontFamily="Montserrat, sans-serif"
            fontWeight="bold"
            letterSpacing="1"
          >
            40 AÑOS
          </text>
          
          <text
            x="85"
            y="196"
            textAnchor="middle"
            fill="#013C68"
            fontSize="8"
            fontFamily="Montserrat, sans-serif"
            fontWeight="bold"
            letterSpacing="1.5"
          >
            GDL · 1986
          </text>

          {/* Shimmer sparkle */}
          <g className="animate-ping origin-center" style={{ transformOrigin: '210px 145px', animationDuration: '3.5s' }}>
            <polygon points="210,137 212,143 218,145 212,147 210,153 208,147 202,145 208,143" fill="#FFFFFF" opacity="0.9" />
          </g>
        </svg>
      </div>
    </div>
  );
};
