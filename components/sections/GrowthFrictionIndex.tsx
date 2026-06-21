"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useGFIStore } from "@/lib/store";

const gfiQuestions = [
  {
    id: "routing",
    question: "How is your acquisition data routed to your sales or conversion team?",
    options: [
      { text: "Manual CRM entry or disjointed CSV uploads.", score: 0.2 },
      { text: "Basic Zapier connections without intent filtering.", score: 0.5 },
      { text: "Real-time algorithmic routing based on behavioral intent.", score: 0.9 }
    ]
  },
  {
    id: "measurement",
    question: "How do you measure the ROI of your marketing spend?",
    options: [
      { text: "Top-of-funnel metrics like clicks, impressions, or lead volume.", score: 0.2 },
      { text: "Estimated closed-won revenue mapped broadly to channels.", score: 0.5 },
      { text: "Exact LTV mapped to the originating keyword and behavior.", score: 0.9 }
    ]
  },
  {
    id: "retention",
    question: "What happens when a high-intent lead goes cold?",
    options: [
      { text: "Sales representatives follow up occasionally until abandoned.", score: 0.2 },
      { text: "They enter a generic, time-delayed email sequence.", score: 0.5 },
      { text: "Automated multi-channel re-engagement triggered by behavioral signals.", score: 0.9 }
    ]
  }
];

function InteractiveDiagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [answerTexts, setAnswerTexts] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const setGFIData = useGFIStore((state) => state.setGFIData);
  const resetGFI = useGFIStore((state) => state.resetGFI);

  const handleSelect = (score: number, text: string) => {
    const newAnswers = [...answers, score];
    const newAnswerTexts = [...answerTexts, text];
    setAnswers(newAnswers);
    setAnswerTexts(newAnswerTexts);

    if (step < gfiQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setIsCalculating(true);
      // Simulate calculation delay
      setTimeout(() => {
        const average = newAnswers.reduce((a, b) => a + b, 0) / newAnswers.length;
        const calculatedScore = Number(average.toFixed(2));
        setFinalScore(calculatedScore);
        
        const isSevere = calculatedScore < 0.5;
        const isWarning = calculatedScore >= 0.5 && calculatedScore < 0.8;
        const severity = isSevere ? "Severe Leakage" : isWarning ? "Moderate Friction" : "Optimized";
        
        setGFIData({
          score: calculatedScore,
          severity,
          answers: {
            routing: newAnswerTexts[0] || "",
            measurement: newAnswerTexts[1] || "",
            retention: newAnswerTexts[2] || ""
          }
        });
        
        setIsCalculating(false);
      }, 1500);
    }
  };

  const resetDiagnostic = () => {
    setStep(0);
    setAnswers([]);
    setAnswerTexts([]);
    setFinalScore(null);
    resetGFI();
  };

  if (isCalculating) {
    return (
      <div className="p-12 border hairline-all flex flex-col items-center justify-center text-center h-[400px]" style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-primary)" }}>
        <div className="w-12 h-12 mb-6 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: "var(--color-primary)", borderTopColor: "transparent" }} />
        <p className="text-body-lg font-mono tracking-widest uppercase mb-2" style={{ color: "var(--color-primary)" }}>Analyzing Architecture</p>
        <p className="text-body-md" style={{ color: "var(--color-secondary)" }}>Quantifying systemic friction across 3 domains...</p>
      </div>
    );
  }

  if (finalScore !== null) {
    const isSevere = finalScore < 0.5;
    const isWarning = finalScore >= 0.5 && finalScore < 0.8;
    
    return (
      <div className="p-10 md:p-16 border hairline-all" style={{ backgroundColor: "var(--color-primary)", color: "var(--color-on-primary)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-label-caps mb-4" style={{ color: "var(--color-primary-fixed-dim)" }}>Diagnostic Complete</p>
            <h3 className="text-headline-md mb-6">Your Growth Friction Index</h3>
            <p className="text-body-lg mb-8" style={{ color: "var(--color-outline-variant)" }}>
              {isSevere && "Severe Operational Drag. More than half of your throughput is being lost to structural bottlenecks. Scaling acquisition right now will accelerate margin erosion."}
              {isWarning && "Moderate Friction Detected. Your systems are functioning, but revenue is leaking at the seams. Yield protection is required before further scaling."}
              {!isSevere && !isWarning && "Highly Optimized Architecture. Your systems are primed for frictionless scale. The focus should remain on marginal yield improvements."}
            </p>
            <button onClick={resetDiagnostic} className="text-label-caps uppercase tracking-widest" style={{ color: "var(--color-on-primary)", borderBottom: "1px solid var(--color-on-primary)" }}>Recalculate</button>
          </div>
          
          <div className="flex flex-col items-center justify-center p-12 border hairline-white relative overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
            <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <p className="text-[80px] md:text-[120px] font-serif leading-none tracking-tighter relative z-10">{finalScore}<span className="text-headline-md font-body ml-2 opacity-50">x</span></p>
            <p className="text-label-caps mt-4 relative z-10" style={{ color: isSevere ? "#ff8a8a" : isWarning ? "#ffdea5" : "#a9c7ff" }}>
              {isSevere ? "SEVERE LEAKAGE" : isWarning ? "MODERATE FRICTION" : "OPTIMIZED"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = gfiQuestions[step];

  return (
    <div className="p-8 md:p-12 border hairline-all transition-all duration-300" style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-primary)" }}>
      <div className="flex items-center justify-between mb-12">
        <span className="text-label-caps" style={{ color: "var(--color-primary)" }}>Live Diagnostic</span>
        <span className="text-label-caps font-mono" style={{ color: "var(--color-secondary)" }}>0{step + 1} / 0{gfiQuestions.length}</span>
      </div>
      
      <h3 className="text-headline-sm mb-8" style={{ color: "var(--color-primary)" }}>{currentQ.question}</h3>
      
      <div className="space-y-4">
        {currentQ.options.map((opt, i) => (
          <button 
            key={i} 
            onClick={() => handleSelect(opt.score, opt.text)}
            className="w-full text-left p-6 border hairline-all transition-all hover:bg-[rgba(0,23,54,0.02)] flex items-start gap-4 group"
            style={{ borderColor: "rgba(0,23,54,0.1)" }}
          >
            <span className="text-label-caps mt-1 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-primary)" }}>{String.fromCharCode(65 + i)}</span>
            <span className="text-body-md" style={{ color: "var(--color-on-surface)" }}>{opt.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}



export function GrowthFrictionIndex() {
  return (
    <section
      id="growth-friction-index"
      className="section-pad"
      aria-labelledby="gfi-heading"
      style={{ backgroundColor: "var(--color-surface-container)" }}
    >
      <div className="container-main">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <AnimatedSection className="md:col-span-5">
            <SectionLabel>Proprietary Diagnostic</SectionLabel>
            <h2
              id="gfi-heading"
              className="text-headline-md"
              style={{ color: "var(--color-primary)" }}
            >
              The Growth Friction Index
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="md:col-span-7 flex items-center">
            <p
              className="text-body-lg"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              Most businesses do not have a growth problem. They have a friction
              problem. We identify exactly where revenue is being suppressed
              across three diagnostic domains — and we remove the constraints
              with precision.
            </p>
          </AnimatedSection>
        </div>

        {/* GFI Formula Visualization */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16 p-8 md:p-12 border hairline-all relative overflow-hidden" style={{ backgroundColor: "var(--color-surface)", borderColor: "rgba(0,23,54,0.1)" }}>
            
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 z-10">
              <div className="text-center">
                <span className="text-label-caps" style={{ color: "var(--color-secondary)" }}>Operational Inputs</span>
                <p className="text-headline-sm mt-2" style={{ color: "var(--color-primary)" }}>Capital & Time</p>
              </div>
              
              <div className="text-display-sm font-light" style={{ color: "var(--color-outline-variant)" }}>÷</div>
              
              <div className="text-center p-6 border hairline-all relative" style={{ backgroundColor: "var(--color-surface)", borderColor: "var(--color-primary)" }}>
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-surface)] px-2 text-[10px] font-mono uppercase tracking-widest whitespace-nowrap" style={{ color: "var(--color-primary)" }}>The Diagnostic</span>
                <p className="text-headline-md tracking-tight" style={{ color: "var(--color-primary)" }}>Friction Drag</p>
              </div>
              
              <div className="text-display-sm font-light" style={{ color: "var(--color-outline-variant)" }}>=</div>
              
              <div className="text-center">
                <span className="text-label-caps" style={{ color: "var(--color-secondary)" }}>Actual Outcome</span>
                <p className="text-headline-sm mt-2" style={{ color: "var(--color-primary)" }}>EBITDA Yield</p>
              </div>
            </div>
            
            <div className="relative text-center mt-10 max-w-2xl mx-auto z-10 pt-8" style={{ borderTop: "1px dashed rgba(0,23,54,0.1)" }}>
              <p className="text-body-lg font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                The Operator&apos;s Equation
              </p>
              <p className="text-body-md" style={{ color: "var(--color-on-surface-variant)" }}>
                Growth isn&apos;t just about adding more capital or time. It&apos;s about removing the friction that suppresses your return on both. We isolate the exact locations where revenue is leaking.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Interactive Diagnostic */}
        <AnimatedSection delay={0.2}>
          <InteractiveDiagnostic />
        </AnimatedSection>
      </div>
    </section>
  );
}
