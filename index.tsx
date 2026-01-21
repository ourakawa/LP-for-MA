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
    container.innerHTML = `<div style="padding: 20px; color: red; font-family: sans-serif;">
      <h2>Application Error</h2>
      <p>${error.message}</p>
    </div>`;
  }
} else {
  console.error("Ray-SOC Studio: Root element not found.");
}