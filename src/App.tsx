import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import CoachingPage from './pages/CoachingPage'
import FractionalCTOPage from './pages/FractionalCTOPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CoachingPage />} />
          <Route path="fractional-cto" element={<FractionalCTOPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
