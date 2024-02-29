import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyPacket from './components/MyPacket/MyPacket.jsx'
import './index.css'
import { BrowserRouter ,Route , Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MyPacket" element={<MyPacket />} />
        <Route path="/" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
)