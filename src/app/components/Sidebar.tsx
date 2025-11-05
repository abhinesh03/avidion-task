/* eslint-disable react-hooks/static-components */
'use client';

import React from 'react';
import { Home, Target, Settings } from 'lucide-react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  currentScreen: 'landing' | 'dashboard' | 'campaigns' | 'settings';
  setCurrentScreen: (screen: 'landing' | 'dashboard' | 'campaigns' | 'settings') => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ currentScreen, setCurrentScreen, sidebarOpen, setSidebarOpen }: SidebarProps) {
  const NavItem = ({ icon: Icon, label, active, onClick }: {
    icon: React.ElementType;
    label: string;
    active: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`${styles.navItem} ${active ? styles.navItemActive : ''}`}
    >
      <Icon className={styles.navIcon} />
      <span className={styles.navLabel}>{label}</span>
    </button>
  );

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarContent}>
          <div className={styles.logo}>
            <Target className={styles.logoIcon} />
            <span className={styles.logoText}>Avidion</span>
          </div>

          <nav className={styles.nav}>
            <NavItem
              icon={Home}
              label="Dashboard"
              active={currentScreen === 'dashboard'}
              onClick={() => {
                setCurrentScreen('dashboard');
                setSidebarOpen(false);
              }}
            />
            <NavItem
              icon={Target}
              label="Campaigns"
              active={currentScreen === 'campaigns'}
              onClick={() => {
                setCurrentScreen('campaigns');
                setSidebarOpen(false);
              }}
            />
            <NavItem
              icon={Settings}
              label="Settings"
              active={currentScreen === 'settings'}
              onClick={() => {
                setCurrentScreen('settings');
                setSidebarOpen(false);
              }}
            />
          </nav>
        </div>
      </aside>
    </>
  );
}