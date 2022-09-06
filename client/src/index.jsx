import { createRoot } from "react-dom/client";
import React from 'react';
import './assets/base.css';
import App from './components/App.jsx';
const root = createRoot(document.getElementById("root"));


root.render(<App />);