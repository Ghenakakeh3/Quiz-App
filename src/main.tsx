import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Theme, ThemePanel } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme ccentColor="crimson" grayColor="sand" radius="large" scaling="95%">
    <App />
    <ThemePanel />


    </Theme>
  </React.StrictMode>,
)
