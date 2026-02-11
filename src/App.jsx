import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HomePage from "./components/HomePage";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminDashboard";
import ApplyForm from "./components/ApplyForm";
import Helpdesk from "./components/Helpdesk";

export default function App() {
  const [currentRole, setCurrentRole] = useState(null); // "student" | "admin"

  const handleLogout = () => {
    setCurrentRole(null);
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route
          path="/"
          element={<LoginPage setCurrentRole={setCurrentRole} />}
        />

        <Route path="/signup" element={<SignupPage />} />

        {/* STUDENT ROUTES */}
        <Route
          path="/home"
          element={
            currentRole === "student" ? <HomePage /> : <Navigate to="/" />
          }
        />

        <Route
          path="/student-dashboard"
          element={
            currentRole === "student" ? (
              <StudentDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/apply"
          element={
            currentRole === "student" ? <ApplyForm /> : <Navigate to="/" />
          }
        />

        <Route
          path="/helpdesk"
          element={
            currentRole === "student" ? <Helpdesk /> : <Navigate to="/" />
          }
        />

        {/* ADMIN ROUTE */}
        <Route
          path="/admin-dashboard"
          element={
            currentRole === "admin" ? (
              <AdminDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
