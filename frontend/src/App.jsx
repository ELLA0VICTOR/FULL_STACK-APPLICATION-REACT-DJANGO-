import React from "react";
import { BrowserRouter as Router , Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotFound from "./pages/Notfound.jsx";
import "./App.css"

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}


function App() {
 

  return (
   <Router>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path="/register" element={<RegisterAndLogout />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
    
   </Router>
  )
}

export default App
