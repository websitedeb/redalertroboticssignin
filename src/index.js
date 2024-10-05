import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const query = new QueryClient();
root.render(
  <QueryClientProvider client={query}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);
