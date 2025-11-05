'use client';

import React from 'react';
import styles from './StatCard.module.css';

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string | number;
  color: string;
}

export default function StatCard({ icon: Icon, title, value, color }: StatCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.value}>{value}</p>
        </div>
        <div className={`${styles.iconWrapper} ${styles[color]}`}>
          <Icon className={styles.icon} />
        </div>
      </div>
    </div>
  );
}