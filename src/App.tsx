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
    <Router>
      <AccessibilityProvider>
        <LanguageProvider>
          <Routes>
            {/* Language-specific routes */}
            {['/es', '/pt', '/zh', '/ru', '/ar', '/he'].map((langPrefix) => (
              <Route key={langPrefix} path={langPrefix} element={<Index />} />
            ))}
            {['/es', '/pt', '/zh', '/ru', '/ar', '/he'].map((langPrefix) => (
              <Route key={`${langPrefix}-blog`} path={`${langPrefix}/blog`} element={<Blog />} />
            ))}
            {['/es', '/pt', '/zh', '/ru', '/ar', '/he'].map((langPrefix) => (
              <Route key={`${langPrefix}-community`} path={`${langPrefix}/community`} element={<Community />} />
            ))}
            {['/es', '/pt', '/zh', '/ru', '/ar', '/he'].map((langPrefix) => (
              <Route key={`${langPrefix}-signup`} path={`${langPrefix}/signup`} element={<SignUp />} />
            ))}
            {['/es', '/pt', '/zh', '/ru', '/ar', '/he'].map((langPrefix) => (
              <Route key={`${langPrefix}-waitlist`} path={`${langPrefix}/waitlist`} element={<Waitlist />} />
            ))}
            
            {/* Default English routes */}
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/community" element={<Community />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/waitlist" element={<Waitlist />} />
          </Routes>
          <AccessibilityButton />
          <Toaster />
        </LanguageProvider>
      </AccessibilityProvider>
    </Router>
  );
}

export default App;