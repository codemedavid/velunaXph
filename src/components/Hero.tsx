import React, { useState, useEffect } from 'react';
import { ArrowRight, FlaskConical, Atom, CheckCircle } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeroProps {
  onShopAll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopAll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { siteSettings } = useSiteSettings();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const businessName = siteSettings?.business_name || 'VelunaXph';

  return (
    <div className="relative min-h-[95vh] overflow-hidden">
      {/* Dreamy Purple/Pink Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 20% 10%, rgba(180, 160, 200, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 80% 30%, rgba(220, 180, 200, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 100% 50% at 50% 100%, rgba(240, 210, 200, 0.7) 0%, transparent 40%),
            radial-gradient(ellipse 60% 40% at 10% 60%, rgba(200, 180, 210, 0.4) 0%, transparent 50%),
            linear-gradient(180deg, 
              #C8B8D8 0%, 
              #D4C0DC 15%,
              #DBC8E0 30%,
              #E2D0E4 45%,
              #E8D8E8 60%,
              #F0E0EC 75%,
              #F5E8F0 90%,
              #FAF0F4 100%
            )
          `
        }}
      />

      {/* Ethereal Cloudy Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 30%),
            radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.6) 0%, transparent 25%),
            radial-gradient(circle at 85% 80%, rgba(255, 255, 255, 0.5) 0%, transparent 20%)
          `
        }}
      />

      {/* Sparkle Stars - Scattered across the design */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large 4-pointed stars */}
        {[
          { top: '8%', left: '5%', size: 20, opacity: 0.9, delay: 0 },
          { top: '15%', right: '10%', size: 24, opacity: 0.85, delay: 0.5 },
          { top: '25%', left: '15%', size: 16, opacity: 0.8, delay: 1 },
          { top: '12%', left: '45%', size: 14, opacity: 0.7, delay: 1.5 },
          { top: '35%', right: '5%', size: 22, opacity: 0.9, delay: 0.3 },
          { top: '55%', left: '8%', size: 18, opacity: 0.75, delay: 0.8 },
          { top: '45%', right: '15%', size: 12, opacity: 0.65, delay: 1.2 },
          { top: '20%', right: '30%', size: 10, opacity: 0.6, delay: 2 },
          { top: '60%', right: '25%', size: 14, opacity: 0.7, delay: 0.7 },
          { top: '30%', left: '35%', size: 8, opacity: 0.5, delay: 1.8 },
        ].map((star, i) => (
          <svg
            key={i}
            className="absolute animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: '3s'
            }}
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 0L13.5 9L22.5 10.5L13.5 12L12 21L10.5 12L1.5 10.5L10.5 9L12 0Z" />
          </svg>
        ))}

        {/* Small dot stars */}
        {[
          { top: '18%', left: '25%', size: 4 },
          { top: '22%', right: '22%', size: 3 },
          { top: '40%', left: '20%', size: 5 },
          { top: '50%', right: '35%', size: 3 },
          { top: '28%', left: '55%', size: 4 },
          { top: '65%', left: '30%', size: 3 },
          { top: '15%', right: '45%', size: 4 },
        ].map((dot, i) => (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: dot.top,
              left: dot.left,
              right: dot.right,
              width: dot.size,
              height: dot.size,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>

      {/* Abstract Bubble/Circle Shapes - Very subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[40%] left-[5%] w-32 h-32 rounded-full border border-white/20" />
        <div className="absolute top-[50%] left-[8%] w-20 h-20 rounded-full border border-white/15" />
        <div className="absolute top-[35%] right-[3%] w-24 h-24 rounded-full border border-white/10" />
      </div>

      {/* Pink Decorative Swirl */}
      <svg
        className="absolute bottom-[25%] right-[8%] w-24 h-24 md:w-32 md:h-32"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M15 85 Q30 60 50 70 Q70 80 65 50 Q60 20 85 30"
          stroke="#E8A0A8"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 sm:pt-24 pb-48 sm:pb-56">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.25] mb-8">
            <span
              className="font-light tracking-wide"
              style={{ color: '#4A3A6A', fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Advanced Peptide Science{' '}
              <span className="text-[#8A7A9A]">for</span>
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span
                className="font-normal italic text-4xl sm:text-5xl md:text-6xl"
                style={{ color: '#5A4A7A', fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Metabolic Harmony
              </span>
              {/* Pink Curved Underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 300 16"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 10 Q75 4 150 12 Q225 18 295 8"
                  stroke="url(#pinkGoldGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="pinkGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E8A0A8" />
                    <stop offset="100%" stopColor="#D4A574" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10"
            style={{ color: '#6A5A8A' }}
          >
            {businessName} blends advanced peptide formulations with
            <br className="hidden sm:block" />
            elegant wellness design to support{' '}
            <span className="underline decoration-[#D4A574] decoration-2 underline-offset-4">balance</span>, vitality,
            <br className="hidden sm:block" />
            and <span className="italic underline decoration-[#D4A574] decoration-2 underline-offset-4">long-term health</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA - Coral/Salmon Pink */}
            <button
              onClick={onShopAll}
              className="w-full sm:w-auto px-8 py-4 text-white font-semibold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #E89090 0%, #D88080 100%)',
              }}
            >
              Explore Peptides
            </button>

            {/* Secondary CTA - White/Cream Outlined */}
            <button
              className="w-full sm:w-auto px-8 py-4 font-semibold text-base sm:text-lg rounded-full border-2 transition-all duration-300 hover:shadow-md"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: '#E0D0D0',
                color: '#6A5A7A'
              }}
            >
              Learn the Science
            </button>
          </div>
        </div>
      </div>

      {/* Multi-Layer Waves at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Wave layers */}
        <svg className="absolute bottom-0 w-full h-48" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
          {/* Back wave - soft pink */}
          <path
            d="M0 120 Q180 80 360 100 Q540 120 720 90 Q900 60 1080 90 Q1260 120 1440 80 L1440 200 L0 200 Z"
            fill="#F0D8DC"
            fillOpacity="0.6"
          />
          {/* Middle wave - peachy beige */}
          <path
            d="M0 140 Q240 100 480 125 Q720 150 960 115 Q1200 80 1440 110 L1440 200 L0 200 Z"
            fill="#F5E0DC"
            fillOpacity="0.8"
          />
          {/* Front wave - cream/white for card */}
          <path
            d="M0 165 Q360 140 720 160 Q1080 180 1440 150 L1440 200 L0 200 Z"
            fill="#FAF5F3"
          />
        </svg>

        {/* Trust Badge Card */}
        <div className="relative z-10 bg-[#FAF5F3] pt-4 pb-6 px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-0 bg-white rounded-2xl py-5 px-6 shadow-sm"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
            >
              {/* Lab Tested */}
              <div className="flex items-center gap-3 px-6">
                <div className="p-2" style={{ color: '#C8A080' }}>
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#5A4A7A' }}>Lab Tested</p>
                  <p className="text-xs" style={{ color: '#9A8AAA' }}>99%+ Purity Verified</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-[#E8E0E4]" />

              {/* Research-Focused */}
              <div className="flex items-center gap-3 px-6">
                <div className="p-2" style={{ color: '#C090A0' }}>
                  <Atom className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#5A4A7A' }}>Research-Focused</p>
                  <p className="text-xs" style={{ color: '#9A8AAA' }}>Science-Backed Formulas</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-[#E8E0E4]" />

              {/* Quality Standards */}
              <div className="flex items-center gap-3 px-6">
                <div className="p-2" style={{ color: '#7A6A9A' }}>
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#5A4A7A' }}>Quality Standards</p>
                  <p className="text-xs" style={{ color: '#9A8AAA' }}>Premium Grade Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
