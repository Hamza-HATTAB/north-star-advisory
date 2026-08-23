export interface NavLink {
  label: string;
  href: string;
}

export interface ServicePillar {
  number: string;
  title: string;
  description: string;
  systemImpact: string;
  strategicOutcome: string;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  tags: string[];
  headline: string;
  problem: string;
  diagnosis: string;
  architecture: string;
  implementation: string;
  constraint: string;
  outcomeStat: string;
  outcomeLabel: string;
}

export interface GFIDomain {
  title: string;
  description: string;
  frictionPoint1: string;
  frictionPoint2: string;
}

export interface WhoWeHelpCategory {
  badge: string;
  title: string;
  description: string;
  keyProblems: string[];
  systemFix: string;
}

export interface DiagnosticDeliverable {
  title: string;
  description: string;
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  role?: string;
  market?: string;
  industry: string;
  companySize: string;
  primaryBottleneck: string;
  website?: string;
  additionalContext?: string;
  turnstileToken?: string;
}

export type ContactFormResponse =
  | { success: true; message: string }
  | { success: false; error: string };

