// src/App.tsx
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />

          {/* This acts as a catch-all. '*' matches anything not defined above */}
          {/* 'replace' ensures the invalid URL doesn't stay in the browser history */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2025 Collectiq. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            {/* <Link to="/">Home</Link> */}
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
