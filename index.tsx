import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

console.log("Ray-SOC Studio: Starting application...");

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Ray-SOC Studio: Render successful.");
  } catch (error) {
    console.error("Ray-SOC Studio: Render failed:", error);
    container.innerHTML = `
      <div style="padding: 40px; text-align: center; font-family: sans-serif;">
        <h2 style="color: #e11d48;">Application Error</h2>
        <p style="color: #4b5563;">ブラウザのキャッシュをクリアして再読み込みしてください。</p>
        <code style="background: #f3f4f6; padding: 10px; border-radius: 8px; display: inline-block; margin-top: 20px;">${error.message}</code>
      </div>
    `;
  }
} else {
  console.error("Ray-SOC Studio: Root element not found.");
}