
export enum AppTab {
  LEAD_FINDING = 'Scout Agent',
  AI_SENDER = 'Sender Agent',
  QUALIFICATION = 'Nurture Agent',
  CALLS_BOOKER = 'Scheduler Agent'
}

export interface Lead {
  id: string;
  name: string;
  role: string;
  company: string;
  email?: string;
  phone?: string;
  readinessScore: number;
  lastEngagement: string;
  engagementType: 'email' | 'click' | 'reply' | 'call';
}

export interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  progress: number;
  sent: number;
  openRate: number;
  clickRate: number;
  replyRate: number;
}
