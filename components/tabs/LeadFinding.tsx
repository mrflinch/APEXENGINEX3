
import React, { useState } from 'react';
import {
  TrendingUp,
  CheckCircle2,
  Target,
  Briefcase,
  Layers,
  Rocket,
  BarChart3
} from 'lucide-react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import GlassCard from '../GlassCard';
import AnimateNumber from '../AnimateNumber';

type TimePeriod = 'Day' | 'Week';

const dataSets: Record<TimePeriod, { name: string; leads: number }[]> = {
  Day: [
    { name: '00:00', leads: 12 },
    { name: '04:00', leads: 45 },
    { name: '08:00', leads: 128 },
    { name: '12:00', leads: 256 },
    { name: '16:00', leads: 184 },
    { name: '20:00', leads: 92 },
    { name: '23:59', leads: 34 },
  ],
  Week: [
    { name: 'Mon', leads: 210 },
    { name: 'Tue', leads: 345 },
    { name: 'Wed', leads: 482 },
    { name: 'Thu', leads: 390 },
    { name: 'Fri', leads: 512 },
    { name: 'Sat', leads: 120 },
    { name: 'Sun', leads: 85 },
  ]
};

const channelData = [
  { name: 'LinkedIn', value: 850 },
  { name: 'SalesNav', value: 620 },
  { name: 'Twitter', value: 210 },
  { name: 'GitHub', value: 165 },
];

const genderData = [
  { name: 'Male', value: 55 },
  { name: 'Female', value: 45 },
];

const COLORS = ['#7c3aed', '#3b82f6', '#10b981', '#f59e0b'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel p-3 border border-purple-500/30 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <p className="text-[10px] text-gray-500 font-black uppercase tracking-wider mb-1">{label}</p>
        <p className="text-sm font-black text-white">
          Leads: <span className="text-purple-400">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const LeadFinding: React.FC = () => {
  const [period, setPeriod] = useState<TimePeriod>('Week');

  return (
    <div className="space-y-8 pb-12 animate-fade-up">
      <p className="text-[11px] text-green-400 font-black uppercase tracking-[0.2em] mb-[-1.5rem] drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">Agent status (Active🟢)</p>

      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-white mb-2">Lead Discovery Dashboard</h1>
          <p className="text-gray-400 font-black">Tracking real buying signals and high-intent prospects</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="relative group">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-sm text-gray-400 font-black">Total Leads Found</p>
              <h2 className="text-3xl font-black mt-1 text-white group-hover:text-purple-300 transition-colors">
                <AnimateNumber value={1845} />
              </h2>
              <div className="flex items-center gap-1 mt-2 text-green-400 text-xs font-black">
                <TrendingUp className="w-3 h-3 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                <span>+24.5% vs last month</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all">
              <Target className="w-6 h-6" />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400 font-black">Qualified Leads</p>
              <h2 className="text-3xl font-black mt-1">
                <AnimateNumber value={482} />
              </h2>
              <div className="flex items-center gap-1 mt-2 text-green-400 text-xs font-black">
                <CheckCircle2 className="w-3 h-3 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                <span>26.1% conversion rate</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400 font-black">Avg. Qual. Score</p>
              <h2 className="text-3xl font-black mt-1">
                <AnimateNumber value={84} suffix="/100" />
              </h2>
              <div className="mt-2 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(124,58,237,0.5)]" style={{ width: '84%' }}></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
              <Target className="w-6 h-6" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 relative" title="Discovery Trends">
          {/* Period Selector */}
          <div className="absolute top-6 right-6 flex bg-white/5 p-1 rounded-lg border border-white/5 z-10">
            {(['Day', 'Week'] as TimePeriod[]).map((p) => (
              <button
                key={p}
                onClick={(e) => { e.stopPropagation(); setPeriod(p); }}
                className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${period === p
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]'
                  : 'text-gray-500 hover:text-gray-300'
                  }`}
              >
                {p}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-400 font-bold mb-4">Lead volume over the last {period.toLowerCase()}</p>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataSets[period]}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                  <filter id="areaGlow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 900 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 900 }} />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ stroke: '#7c3aed', strokeWidth: 1, strokeDasharray: '5 5' }}
                />
                <Area
                  type="monotone"
                  dataKey="leads"
                  stroke="#7c3aed"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorLeads)"
                  isAnimationActive={true}
                  animationDuration={800}
                  filter="url(#areaGlow)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard title="Leads by Channel" subtitle="Source breakdown">
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#ffffff10" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10, fontWeight: 900 }} width={70} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ffffff05' }} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} style={{ filter: 'drop-shadow(0 0 5px ' + COLORS[index % COLORS.length] + '80)' }} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard title="Demographics" subtitle="Key audience breakdown">
          <div className="flex items-center">
            <div className="h-[200px] w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                    animationDuration={1500}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} style={{ filter: 'drop-shadow(0 0 5px ' + COLORS[index % COLORS.length] + '80)' }} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-4 pr-4">
              <div className="flex justify-between items-center text-[10px]">
                <span className="flex items-center gap-2 text-gray-400 font-black uppercase"><Briefcase className="w-3 h-3 text-purple-400 drop-shadow-[0_0_5px_rgba(124,58,237,0.5)]" /> Job Roles</span>
                <span className="text-white font-black">Top: CMO (32%)</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="flex items-center gap-2 text-gray-400 font-black uppercase"><Layers className="w-3 h-3 text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" /> Industries</span>
                <span className="text-white font-black">B2B SaaS</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="flex items-center gap-2 text-gray-400 font-black uppercase"><Rocket className="w-3 h-3 text-green-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" /> Funding</span>
                <span className="text-white font-black">Series A/B</span>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="bg-gradient-to-br from-blue-900/10 to-purple-900/10 border-blue-500/20">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-5 h-5 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <h4 className="text-sm font-black text-white uppercase tracking-widest text-glow-purple">Growth Forecast</h4>
          </div>
          <p className="text-xs text-gray-400 font-black uppercase leading-relaxed mb-4">
            System predicts a <span className="text-green-400 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">+12% surge</span> in qualified leads next week based on current SalesNav velocity.
          </p>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 w-[72%] shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default LeadFinding;
