import React from "react";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminCrud from './pages/AdminCrud';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/admin-crud" element={<PrivateRoute role="admin"><AdminCrud /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
