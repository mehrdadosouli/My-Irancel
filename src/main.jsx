import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyPacket from './components/MyPacket/MyPacket.jsx'
import './index.css'
import { BrowserRouter ,Route , Routes } from 'react-router-dom'
import LoginAndRegister from './components/LoginAndRegister/LoginAndRegister'
import MyProfile from './components/MyProfile/MyProfile.jsx'
import store from './app/redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/MyPacket" element={<MyPacket />} />
        <Route path="/register" element={<LoginAndRegister />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
