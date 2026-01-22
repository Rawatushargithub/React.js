import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Converter from "./pages/Converter";
import { AuthProvider } from "./Context/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          {/* REDIRECT ROOT TO LOGIN */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* PUBLIC ROUTE */}
          <Route path="/login" element={<Login />} />

          {/* PROTECTED ROUTES */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/currency/converter"
            element={
              <ProtectedRoute>
                <Converter />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
