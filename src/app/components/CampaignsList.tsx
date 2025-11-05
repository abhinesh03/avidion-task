'use client';

import React, { useState } from 'react';
import { Plus, Mail, MessageSquare } from 'lucide-react';
import CreateCampaignModal from './CreateCampaignModal';
import Toast from './ui/Toast';
import { Campaign } from '../lib/types';
import styles from './CampaignsList.module.css';

interface CampaignsListProps {
  campaigns: Campaign[];
  setCampaigns: React.Dispatch<React.SetStateAction<Campaign[]>>;
}

export default function CampaignsList({ campaigns, setCampaigns }: CampaignsListProps) {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCampaignCreated = (newCampaign: Campaign) => {
    const updatedCampaigns = [...campaigns, newCampaign];
    setCampaigns(updatedCampaigns);
    localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
    setShowModal(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active':
        return styles.statusActive;
      case 'Draft':
        return styles.statusDraft;
      default:
        return styles.statusScheduled;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Campaigns</h1>
          <p className={styles.subtitle}>Manage your marketing campaigns</p>
        </div>
        <button onClick={() => setShowModal(true)} className={styles.createButton}>
          <Plus className={styles.buttonIcon} />
          Create Campaign
        </button>
      </div>

      {/* Campaigns Table */}
      <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th className={styles.tableHeader}>Name</th>
                <th className={styles.tableHeader}>Type</th>
                <th className={styles.tableHeader}>Status</th>
                <th className={styles.tableHeader}>Sent</th>
                <th className={styles.tableHeader}>Replies</th>
                <th className={styles.tableHeader}>Created At</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className={styles.tableRow}>
                  <td className={styles.tableCell}>
                    <div className={styles.campaignName}>{campaign.name}</div>
                    <div className={styles.campaignDescription}>{campaign.description}</div>
                  </td>
                  <td className={styles.tableCell}>
                    <span className={styles.typeCell}>
                      {campaign.type === 'Email' ? (
                        <Mail className={styles.typeIcon} />
                      ) : (
                        <MessageSquare className={styles.typeIcon} />
                      )}
                      {campaign.type}
                    </span>
                  </td>
                  <td className={styles.tableCell}>
                    <span className={`${styles.statusBadge} ${getStatusClass(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className={styles.tableCell}>{campaign.sent.toLocaleString()}</td>
                  <td className={styles.tableCell}>{campaign.replies}</td>
                  <td className={`${styles.tableCell} ${styles.dateCell}`}>{campaign.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <CreateCampaignModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCampaignCreated}
        />
      )}

      {showToast && <Toast message="Campaign created successfully!" />}
    </div>
  );
}