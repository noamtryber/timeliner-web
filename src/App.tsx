import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
            {/* Language-specific routes */}
            <Route path="/es/*" element={
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/community" element={<Community />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/waitlist" element={<Waitlist />} />
              </Routes>
            } />
            <Route path="/pt/*" element={
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/community" element={<Community />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/waitlist" element={<Waitlist />} />
              </Routes>
            } />
            <Route path="/zh/*" element={
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/community" element={<Community />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/waitlist" element={<Waitlist />} />
              </Routes>
            } />
            <Route path="/ru/*" element={
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/community" element={<Community />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/waitlist" element={<Waitlist />} />
              </Routes>
            } />
            <Route path="/ar/*" element={
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/community" element={<Community />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/waitlist" element={<Waitlist />} />
              </Routes>
            } />
            <Route path="/he/*" element={
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/community" element={<Community />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/waitlist" element={<Waitlist />} />
              </Routes>
            } />
            
            {/* Default English routes */}
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