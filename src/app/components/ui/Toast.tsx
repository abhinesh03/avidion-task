'use client';

import React from 'react';
import { Check } from 'lucide-react';
import styles from './Toast.module.css';

interface ToastProps {
  message: string;
}

export default function Toast({ message }: ToastProps) {
  return (
    <div className={styles.container}>
      <div className={styles.toast}>
        <Check className={styles.icon} />
        <span className={styles.message}>{message}</span>
      </div>
    </div>
  );
}