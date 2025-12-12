import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Settings from './Pages/Settings'
import Profile from './Pages/Profile'

function App() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path='settings' element={<Settings/>} />
      <Route path='profile' element={<Profile/>} />
    </Routes>
  )
}

export default App
