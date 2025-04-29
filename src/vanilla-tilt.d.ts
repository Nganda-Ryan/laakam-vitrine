// src/vanilla-tilt.d.ts
import { VanillaTilt } from 'vanilla-tilt';

// Étendre le type HTMLDivElement pour inclure la propriété 'vanillaTilt'
declare global {
  interface HTMLDivElement {
    vanillaTilt: VanillaTilt;
  }
}

// Assurez-vous que ce fichier est pris en compte par TypeScript
export {};
