import { create } from 'zustand';

interface GFIData {
  score: number | null;
  severity: "Severe Leakage" | "Moderate Friction" | "Optimized" | null;
  answers: {
    routing: string;
    measurement: string;
    retention: string;
  } | null;
}

interface GFIStore extends GFIData {
  setGFIData: (data: Omit<GFIData, 'score' | 'severity' | 'answers'> & Required<GFIData>) => void;
  resetGFI: () => void;
}

export const useGFIStore = create<GFIStore>((set) => ({
  score: null,
  severity: null,
  answers: null,
  setGFIData: (data) => set({ ...data }),
  resetGFI: () => set({ score: null, severity: null, answers: null }),
}));
