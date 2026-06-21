export function HeroVisual() {
  return (
    <div className="relative w-full h-full bg-[#001736] overflow-hidden flex items-center justify-center border border-[rgba(255,255,255,0.1)]">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Central Axis */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30" />
      
      {/* Data Vectors */}
      <div className="relative w-full h-full max-w-[80%] max-h-[80%]">
        {/* Chaotic inputs converging */}
        <div className="absolute left-0 top-1/4 w-1/3 h-px bg-gradient-to-r from-transparent to-[#bfa888] opacity-50" style={{ transform: 'rotate(15deg)', transformOrigin: 'right' }} />
        <div className="absolute left-0 top-3/4 w-1/3 h-px bg-gradient-to-r from-transparent to-[#bfa888] opacity-50" style={{ transform: 'rotate(-25deg)', transformOrigin: 'right' }} />
        <div className="absolute left-0 top-1/2 w-1/3 h-px bg-gradient-to-r from-transparent to-[#bfa888] opacity-50" />
        
        {/* Convergence Node */}
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-4 h-4 border border-[#bfa888] rounded-sm flex items-center justify-center bg-[#001736] z-10">
          <div className="w-1.5 h-1.5 bg-[#bfa888]" />
        </div>
        
        {/* Unified Output Vector */}
        <div className="absolute left-1/3 right-0 top-1/2 h-px bg-[#bfa888] shadow-[0_0_10px_rgba(191,168,136,0.8)] z-0">
          {/* Moving signal along the output vector */}
          <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#fbf9f4] to-transparent animate-pulse" />
        </div>
        
        {/* Yield Area Chart Simulation */}
        <svg className="absolute left-1/3 right-0 top-1/2 h-1/2 w-2/3" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path 
            d="M0,0 L100,0 L100,100 L0,100 Z" 
            fill="url(#yieldGradient)" 
            opacity="0.1"
          />
          <path 
            d="M0,0 Q30,20 60,60 T100,100" 
            fill="none" 
            stroke="#bfa888" 
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="yieldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#bfa888" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

      </div>
      
      {/* Corner Data Tags */}
      <div className="absolute top-4 right-4 font-mono text-[10px] text-white/40 tracking-widest uppercase">
        SYS.ARC.01
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/40 tracking-widest uppercase">
        YIELD.VECTOR
      </div>
    </div>
  );
}
