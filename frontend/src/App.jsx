import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SwapRequestPage from "./pages/HomePage/SwapRequestPage";
import UserProfile from "./pages/UserProfilePage/UserProfile";
import RequestPage from "./pages/RequestPage/RequestPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/swap-requests" element={<SwapRequestPage />} />
        <Route path="/profile" element={<UserProfile />} />
         <Route path="/request" element={<RequestPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;