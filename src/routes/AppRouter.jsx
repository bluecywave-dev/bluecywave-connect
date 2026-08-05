import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home/Home'

function AppRouter() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default AppRouter