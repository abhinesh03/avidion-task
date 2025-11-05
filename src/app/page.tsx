'use client';

import React, { useState, useEffect } from 'react';
import { Campaign } from './lib/types';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CampaignsList from './components/CampaignsList';
import './HomePage.module.css';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<'landing' | 'dashboard' | 'campaigns' | 'settings'>('landing');
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load campaigns from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('campaigns');
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCampaigns(JSON.parse(stored));
    }
  }, []);

  if (currentScreen === 'landing') {
    return <LandingPage onGetStarted={() => setCurrentScreen('dashboard')} />;
  }

  return (
    <div className="app-container">
      <Sidebar
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="main-content">
        {currentScreen === 'dashboard' && <Dashboard campaigns={campaigns} />}
        {currentScreen === 'campaigns' && (
          <CampaignsList campaigns={campaigns} setCampaigns={setCampaigns} />
        )}
      </div>
    </div>
  );
}