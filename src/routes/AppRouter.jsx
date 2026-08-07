import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home/Home'
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";

function AppRouter() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default AppRouter