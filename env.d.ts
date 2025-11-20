/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_GA_ID?: string;
  }
}

// Google Analytics gtag type definitions
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

export {};

