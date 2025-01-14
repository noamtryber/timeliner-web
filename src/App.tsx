import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AccessibilityButton } from "@/components/accessibility/AccessibilityButton";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import Community from "@/pages/Community";
import SignUp from "@/pages/SignUp";
import Waitlist from "@/pages/Waitlist";

function App() {
  return (
    <AccessibilityProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/community" element={<Community />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
          <AccessibilityButton />
          <Toaster />
        </Router>
      </LanguageProvider>
    </AccessibilityProvider>
  );
}

export default App;