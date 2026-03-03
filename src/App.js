import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModeProvider } from './context/ModeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Chatbot from './components/common/Chatbot';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollToTopOnMount from './components/common/ScrollToTopOnMount';

// Pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LandingPage from './pages/LandingPage';
import EstatePage from './pages/EstatePage';
import ConstructionPage from './pages/ConstructionPage';

function App() {
  return (
    <ModeProvider>
      <Router>
        <ScrollToTopOnMount />
        <div className="min-h-screen bg-primary-900 text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/estate" element={<EstatePage />} />
              <Route path="/construction" element={<ConstructionPage />} />
              <Route path="/projects" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
          <ScrollToTop />
        </div>
      </Router>
    </ModeProvider>
  );
}

export default App;