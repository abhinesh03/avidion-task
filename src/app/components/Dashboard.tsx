'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import StatCard from './ui/StatCard';
import { Target, Mail, MessageSquare, Calendar } from 'lucide-react';
import { Campaign } from '../lib/types';
import styles from './Dashboard.module.css';

interface DashboardProps {
  campaigns: Campaign[];
}

const chartData = [
  { name: 'Mon', campaigns: 4, replies: 24 },
  { name: 'Tue', campaigns: 6, replies: 32 },
  { name: 'Wed', campaigns: 8, replies: 45 },
  { name: 'Thu', campaigns: 5, replies: 28 },
  { name: 'Fri', campaigns: 7, replies: 38 },
  { name: 'Sat', campaigns: 3, replies: 18 },
  { name: 'Sun', campaigns: 2, replies: 12 }
];

export default function Dashboard({ campaigns }: DashboardProps) {
  const totalSent = campaigns.reduce((sum, c) => sum + c.sent, 0);
  const totalReplies = campaigns.reduce((sum, c) => sum + c.replies, 0);
  const activeCampaigns = campaigns.filter(c => c.status === 'Active').length;
  const meetingsBooked = Math.floor(totalReplies * 0.3);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subtitle}>Welcome back! Here&apos;s your campaign overview.</p>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <StatCard
          icon={Target}
          title="Active Campaigns"
          value={activeCampaigns}
          color="bgBlue500"
        />
        <StatCard
          icon={Mail}
          title="Emails Sent"
          value={totalSent.toLocaleString()}
          color="bgGreen500"
        />
        <StatCard
          icon={MessageSquare}
          title="Replies"
          value={totalReplies}
          color="bgPurple500"
        />
        <StatCard
          icon={Calendar}
          title="Meetings Booked"
          value={meetingsBooked}
          color="bgOrange500"
        />
      </div>

      {/* Charts */}
      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Campaign Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="campaigns" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Reply Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="replies" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}