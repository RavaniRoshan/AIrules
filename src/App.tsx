import React from 'react';
import { DarkModeProvider } from './components/DarkModeProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ComplianceCheck from './components/ComplianceCheck';
import RegulationBadges from './components/RegulationBadges';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <ProblemSolution />
        <ComplianceCheck />
        <RegulationBadges />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;