export interface Campaign {
  id: string;
  name: string;
  type: 'Email' | 'WhatsApp';
  description: string;
  status: 'Active' | 'Draft' | 'Completed';
  sent: number;
  replies: number;
  createdAt: string;
}

export interface FormData {
  name: string;
  type: 'Email' | 'WhatsApp';
  description: string;
}

export interface FormErrors {
  name?: string;
  type?: string;
  description?: string;
}