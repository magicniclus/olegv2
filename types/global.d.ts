// Déclarations TypeScript globales

declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      parameters: {
        send_to: string;
        value: number;
        currency: string;
      }
    ) => void;
  }
}

export {};
