'use client';

import React, { useState, useEffect } from 'react';
import { Target, Mail, BarChart, Users, TrendingUp } from 'lucide-react';
import styles from './LandingPage.module.css';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.container}>
      {/* Animated background elements */}
      <div 
        className={styles.mouseGradient}
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 51, 234, 0.3), transparent 50%)`
        }}
      />
      
      {/* Floating orbs */}
      <div className={`${styles.orb} ${styles.orbTop}`} />
      <div className={`${styles.orb} ${styles.orbBottom}`} />
      
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <Target className={styles.logoIcon} />
            <span className={styles.logoText}>Avidion</span>
          </div>
        </div>
        
        <h1 className={styles.heading}>
          Campaign Management
          <br />
          <span className={styles.headingGradient}>
            Made Simple
          </span>
        </h1>
        
        <p className={styles.description}>
          Launch, track, and optimize your campaigns with intelligent insights and seamless automation
        </p>
        
        <div className={styles.buttons}>
          <button onClick={onGetStarted} className={styles.primaryButton}>
            <span className={styles.buttonContent}>
              Get Started
              <TrendingUp className={styles.buttonIcon} />
            </span>
            <div className={styles.buttonOverlay} />
          </button>
          
          <button className={styles.secondaryButton}>
            Learn More
          </button>
        </div>
        
        {/* Feature highlights */}
        <div className={styles.features}>
          {[
            { icon: Mail, title: 'Multi-Channel', desc: 'Email & WhatsApp campaigns' },
            { icon: BarChart, title: 'Analytics', desc: 'Real-time performance tracking' },
            { icon: Users, title: 'Team Collaboration', desc: 'Work together seamlessly' }
          ].map((feature, i) => (
            <div key={i} className={styles.featureCard}>
              <feature.icon className={styles.featureIcon} />
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}