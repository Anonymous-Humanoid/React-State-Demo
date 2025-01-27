import React from 'react';
import { createRoot } from 'react-dom/client';
import Test from './app';

// Loading page CSS
import './index.css';

// Mounting components
const container = document.getElementById('app-container')!;
const root = createRoot(container);

root.render(<Test />);
