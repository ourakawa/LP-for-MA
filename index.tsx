import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const render = () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Could not find root element to mount to");
  }
};

// DOMの読み込み完了を待ってからレンダリングを開始
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render);
} else {
  render();
}
