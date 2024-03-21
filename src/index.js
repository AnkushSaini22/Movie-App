import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Replace ReactDOM.render with createRoot
const rootElement = document.getElementById('root'); // Specify the root element
const root = createRoot(rootElement); // Create a root object

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// Render your app inside createRoot

