import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
)

export default App
