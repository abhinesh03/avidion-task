'use client';

import React from 'react';
import { Clock } from 'lucide-react';
import styles from './ComingSoon.module.css';

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <Clock className={styles.icon} />
      <h1 className={styles.title}>Coming Soon</h1>
      <p className={styles.subtitle}>
        This feature is under development. Stay tuned for updates!
      </p>
    </div>
  );
}
