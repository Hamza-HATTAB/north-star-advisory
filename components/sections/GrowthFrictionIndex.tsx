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
            <div className="mb-8 space-y-6">
              {isSevere && (
                <>
                  <div className="space-y-1">
                    <p className="text-label-caps" style={{ color: "var(--color-primary-fixed-dim)" }}>01 / Mathematical Reality</p>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>Severe Operational Drag. Over 50% of your throughput is actively suppressed by structural bottlenecks.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-label-caps" style={{ color: "var(--color-primary-fixed-dim)" }}>02 / Business Implications</p>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>Scaling acquisition spend in this state will mathematically accelerate margin erosion. Capital is converting to friction, not yield.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-label-caps" style={{ color: "var(--color-primary-fixed-dim)" }}>03 / Recommended Action</p>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>A complete architectural audit is required to identify and patch the core leaks before deploying further growth capital.</p>
                  </div>
                </>
              )}
              {isWarning && (
                <>
                  <div className="space-y-1">
                    <p className="text-label-caps" style={{ color: "var(--color-primary-fixed-dim)" }}>01 / Mathematical Reality</p>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>Moderate Friction Detected. Your systems are functioning, but measurable revenue is leaking at the seams.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-label-caps" style={{ color: "var(--color-primary-fixed-dim)" }}>02 / Business Implications</p>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>You are working harder than necessary for your current revenue. Your system is inefficient, requiring excessive manual bandwidth to sustain.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-label-caps" style={{ color: "var(--color-primary-fixed-dim)" }}>03 / Recommended Action</p>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>Yield protection is required. We must isolate the specific friction points and deploy algorithmic execution before further scaling.</p>
                  </div>
                </>
              )}
              {!isSevere && !isWarning && (
                <>
                  <div className="space-y-1">
                    <p className="text-label-caps" style={{ color: "var(--color-primary-fixed-dim)" }}>01 / Mathematical Reality</p>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>Highly Optimized Architecture. Your core operational systems are primed for frictionless scale.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-label-caps" style={{ color: "var(--color-primary-fixed-dim)" }}>02 / Business Implications</p>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>Capital deployed into this system will yield compounding returns. Your infrastructure is not currently the bottleneck to your growth.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-label-caps" style={{ color: "var(--color-primary-fixed-dim)" }}>03 / Recommended Action</p>
                    <p className="text-body-md" style={{ color: "var(--color-outline-variant)" }}>The focus should remain on marginal yield improvements and advanced routing experiments to squeeze the final 5% of efficiency.</p>
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-8">
              <a 
                href={`https://wa.me/213776463005?text=${encodeURIComponent(
                  "Hello, I completed the Growth Friction Diagnostic and would like to discuss the results."
                )}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white font-semibold transition-transform hover:scale-105 w-full lg:w-auto" 
                style={{ backgroundColor: "#25D366" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Discuss on WhatsApp
              </a>
              <button onClick={resetDiagnostic} className="text-label-caps uppercase tracking-widest mt-2 lg:mt-0" style={{ color: "var(--color-on-primary)", borderBottom: "1px solid var(--color-on-primary)" }}>Recalculate</button>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 md:p-12 border hairline-white relative overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
            <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <p className="text-[64px] md:text-[120px] font-serif leading-none tracking-tighter relative z-10">{finalScore}<span className="text-headline-md font-body ml-2 opacity-50">x</span></p>
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
