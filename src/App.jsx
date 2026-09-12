import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'

const App = () => (
  <HelmetProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </HelmetProvider>
)

export default App
