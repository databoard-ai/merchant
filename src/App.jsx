import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react"; // Chakra components
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import OtpPage from "./pages/otp";
import EmailPage from "./pages/email";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for SignUpPage at the root path */}
        <Route path="/" element={<EmailPage />} />
        {/* Route for LoginPage */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />

        <Route path="/otp" element={<OtpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
