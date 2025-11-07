/* eslint-disable react-hooks/static-components */
'use client';

import React from 'react';
import { Home, Target, Settings, Menu, X } from 'lucide-react';
import styles from './Sidebar.module.css';

interface HeaderProps {
  currentScreen: 'landing' | 'dashboard' | 'campaigns' | 'settings';
  setCurrentScreen: (screen: 'landing' | 'dashboard' | 'campaigns' | 'settings') => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Header({ currentScreen, setCurrentScreen, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
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
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <Target className={styles.logoIcon} />
            <span className={styles.logoText}>Avidion</span>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <NavItem
              icon={Home}
              label="Dashboard"
              active={currentScreen === 'dashboard'}
              onClick={() => setCurrentScreen('dashboard')}
            />
            <NavItem
              icon={Target}
              label="Campaigns"
              active={currentScreen === 'campaigns'}
              onClick={() => setCurrentScreen('campaigns')}
            />
            <NavItem
              icon={Settings}
              label="Settings"
              active={currentScreen === 'settings'}
              onClick={() => setCurrentScreen('settings')}
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className={styles.mobileNav}>
            <NavItem
              icon={Home}
              label="Dashboard"
              active={currentScreen === 'dashboard'}
              onClick={() => {
                setCurrentScreen('dashboard');
                setMobileMenuOpen(false);
              }}
            />
            <NavItem
              icon={Target}
              label="Campaigns"
              active={currentScreen === 'campaigns'}
              onClick={() => {
                setCurrentScreen('campaigns');
                setMobileMenuOpen(false);
              }}
            />
            <NavItem
              icon={Settings}
              label="Settings"
              active={currentScreen === 'settings'}
              onClick={() => {
                setCurrentScreen('settings');
                setMobileMenuOpen(false);
              }}
            />
          </nav>
        )}
      </header>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}