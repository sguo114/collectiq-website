// src/App.tsx
import { useState } from "react";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

type Page = "home" | "privacy" | "terms";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "privacy":
        return <PrivacyPolicyPage setCurrentPage={setCurrentPage} />;
      case "terms":
        return <TermsAndConditionsPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
      <footer className="footer">
        <p>&copy; 2025 Collectiq. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <button onClick={() => setCurrentPage("privacy")}>Privacy Policy</button>
          <button onClick={() => setCurrentPage("terms")}>Terms & Conditions</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
