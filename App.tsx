
import React, { useState, Suspense, lazy } from 'react';
import { AppTab } from './types';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';

// Lazy load components for performance
const LandingPage = lazy(() => import('./components/LandingPage'));
const LeadFinding = lazy(() => import('./components/tabs/LeadFinding'));
const AISender = lazy(() => import('./components/tabs/AISender'));
const Qualification = lazy(() => import('./components/tabs/Qualification'));
const CallsBooker = lazy(() => import('./components/tabs/CallsBooker'));

const LoadingFallback = () => (
  <div className="flex h-screen w-screen items-center justify-center bg-[#05070a]">
    <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.LEAD_FINDING);
  const [showDashboard, setShowDashboard] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('apex_dashboard_access') === 'true';
    }
    return false;
  });

  const handleEnter = () => {
    setShowDashboard(true);
    localStorage.setItem('apex_dashboard_access', 'true');
  };

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.LEAD_FINDING:
        return <LeadFinding />;
      case AppTab.AI_SENDER:
        return <AISender />;
      case AppTab.QUALIFICATION:
        return <Qualification />;
      case AppTab.CALLS_BOOKER:
        return <CallsBooker />;
      default:
        return <LeadFinding />;
    }
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      {!showDashboard ? (
        <LandingPage onEnter={handleEnter} />
      ) : (
        <div className="flex h-screen bg-[#05070a] text-gray-100 overflow-hidden">
          {/* Background Glow Decorations */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />

          <main className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8 relative">
            <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
              {renderContent()}
            </div>
          </main>
        </div>
      )}
    </Suspense>
  );
};

export default App;
