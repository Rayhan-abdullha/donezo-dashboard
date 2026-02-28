import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './page/Auth';
import Dashboard from './page/Dashboard';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth/>} />
          
          {/* Protected Dashboard Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;