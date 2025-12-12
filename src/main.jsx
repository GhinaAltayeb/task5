import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../src/i18n/index'
import { RTL_LANGUAGES } from './i18n/rtl'
import App from './App.jsx'

import './index.css'

const savedLang = localStorage.getItem("lng") || "en";
document.documentElement.dir = RTL_LANGUAGES.includes(savedLang)
  ? "rtl"
  : "ltr";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Task5">
        <App/>
    </BrowserRouter>
  </StrictMode>,
)
