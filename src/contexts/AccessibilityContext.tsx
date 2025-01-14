import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilityContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
  letterSpacing: number;
  setLetterSpacing: (spacing: number) => void;
  lineHeight: number;
  setLineHeight: (height: number) => void;
  fontWeight: number;
  setFontWeight: (weight: number) => void;
  highlightTitles: boolean;
  setHighlightTitles: (highlight: boolean) => void;
  highlightLinks: boolean;
  setHighlightLinks: (highlight: boolean) => void;
  dyslexicFont: boolean;
  setDyslexicFont: (dyslexic: boolean) => void;
  contrast: 'normal' | 'dark' | 'light' | 'high';
  setContrast: (contrast: 'normal' | 'dark' | 'light' | 'high') => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(100);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [fontWeight, setFontWeight] = useState(400);
  const [highlightTitles, setHighlightTitles] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [contrast, setContrast] = useState<'normal' | 'dark' | 'light' | 'high'>('normal');

  useEffect(() => {
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}%`);
    document.documentElement.style.setProperty('--letter-spacing', `${letterSpacing}px`);
    document.documentElement.style.setProperty('--line-height', `${lineHeight}`);
    document.documentElement.style.setProperty('--font-weight', fontWeight.toString());
    
    if (dyslexicFont) {
      document.documentElement.classList.add('dyslexic-font');
    } else {
      document.documentElement.classList.remove('dyslexic-font');
    }

    if (highlightTitles) {
      document.documentElement.classList.add('highlight-titles');
    } else {
      document.documentElement.classList.remove('highlight-titles');
    }

    if (highlightLinks) {
      document.documentElement.classList.add('highlight-links');
    } else {
      document.documentElement.classList.remove('highlight-links');
    }

    document.documentElement.setAttribute('data-contrast', contrast);
  }, [fontSize, letterSpacing, lineHeight, fontWeight, highlightTitles, highlightLinks, dyslexicFont, contrast]);

  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      setFontSize,
      letterSpacing,
      setLetterSpacing,
      lineHeight,
      setLineHeight,
      fontWeight,
      setFontWeight,
      highlightTitles,
      setHighlightTitles,
      highlightLinks,
      setHighlightLinks,
      dyslexicFont,
      setDyslexicFont,
      contrast,
      setContrast,
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};