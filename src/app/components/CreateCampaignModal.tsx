 

'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Campaign, FormErrors } from '../lib/types';
import styles from './CreateCampaignModal.module.css';
import commonStyles from './common.module.css';

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
    <div className={commonStyles.modalOverlay} onClick={onClose}>
      <div className={commonStyles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={commonStyles.modalHeader}>
          <h2 className={commonStyles.modalTitle}>Create Campaign</h2>
          <button onClick={onClose} className={commonStyles.iconButton}>
            <X size={20} />
          </button>
        </div>

        <div className={commonStyles.modalBody}>
          <div className={commonStyles.formGroup}>
            <label className={commonStyles.label}>
              Campaign Name <span className={commonStyles.required}>*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`${commonStyles.input} ${formErrors.name ? commonStyles.inputError : ''}`}
              placeholder="Enter campaign name"
            />
            {formErrors.name && (
              <span className={commonStyles.errorText}>{formErrors.name}</span>
            )}
          </div>

          <div className={commonStyles.formGroup}>
            <label className={commonStyles.label}>
              Campaign Type <span className={commonStyles.required}>*</span>
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as 'Email' | 'WhatsApp' })}
              className={`${commonStyles.select} ${formErrors.type ? commonStyles.inputError : ''}`}
            >
              <option value="Email">Email</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
            {formErrors.type && (
              <span className={commonStyles.errorText}>{formErrors.type}</span>
            )}
          </div>

          <div className={commonStyles.formGroup}>
            <label className={commonStyles.label}>
              Description <span className={commonStyles.required}>*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className={`${commonStyles.textarea} ${formErrors.description ? commonStyles.inputError : ''}`}
              placeholder="Describe your campaign"
            />
            {formErrors.description && (
              <span className={commonStyles.errorText}>{formErrors.description}</span>
            )}
          </div>
        </div>

        <div className={commonStyles.modalFooter}>
          <button onClick={onClose} className={commonStyles.btnSecondary}>
            Cancel
          </button>
          <button onClick={handleSubmit} className={commonStyles.btnPrimary}>
            Create Campaign
          </button>
        </div>
      </div>
    </div>
  );
}