'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Campaign, FormErrors } from '../lib/types';
import styles from './CreateCampaignModal.module.css';

interface CreateCampaignModalProps {
  onClose: () => void;
  onSubmit: (campaign: Campaign) => void;
}

export default function CreateCampaignModal({ onClose, onSubmit }: CreateCampaignModalProps) {
  const [formData, setFormData] = useState<{ name: string; type: 'Email' | 'WhatsApp'; description: string }>({
    name: '',
    type: 'Email',
    description: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Campaign name is required';
    } else if (formData.name.length < 3) {
      errors.name = 'Campaign name must be at least 3 characters';
    }
    
    if (!formData.type) {
      errors.type = 'Campaign type is required';
    }
    
    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    } else if (formData.description.length < 10) {
      errors.description = 'Description must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      name: formData.name,
      type: formData.type,
      description: formData.description,
      status: 'Draft',
      sent: 0,
      replies: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    onSubmit(newCampaign);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Create Campaign</h2>
            <button onClick={onClose} className={styles.closeButton}>
              <X className={styles.closeIcon} />
            </button>
          </div>

          <div className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Campaign Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`${styles.input} ${formErrors.name ? styles.inputError : ''}`}
                placeholder="Enter campaign name"
              />
              {formErrors.name && (
                <p className={styles.errorMessage}>{formErrors.name}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Campaign Type *
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as 'Email' | 'WhatsApp' })}
                className={`${styles.select} ${formErrors.type ? styles.inputError : ''}`}
              >
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
              {formErrors.type && (
                <p className={styles.errorMessage}>{formErrors.type}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className={`${styles.textarea} ${formErrors.description ? styles.inputError : ''}`}
                placeholder="Describe your campaign"
              />
              {formErrors.description && (
                <p className={styles.errorMessage}>{formErrors.description}</p>
              )}
            </div>

            <div className={styles.buttons}>
              <button onClick={handleSubmit} className={styles.submitButton}>
                Create Campaign
              </button>
              <button onClick={onClose} className={styles.cancelButton}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}