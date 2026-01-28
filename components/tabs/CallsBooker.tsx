
import React from 'react';
import {
  Calendar as CalendarIcon,
  Video,
  Clock,
  ExternalLink,
  Users,
  Target
} from 'lucide-react';
import GlassCard from '../GlassCard';
import AnimateNumber from '../AnimateNumber';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const CallsBooker: React.FC = () => {
  const weeklyData = [
    { week: 'Week 1', calls: 12 },
    { week: 'Week 2', calls: 18 },
    { week: 'Week 3', calls: 14 },
    { week: 'Week 4', calls: 21 },
  ];

  const timeDistributionData = [
    { name: 'Morning (8-11 AM)', value: 10, color: '#8b5cf6' },
    { name: 'Afternoon (12-6 PM)', value: 24, color: '#3b82f6' },
    { name: 'Evening (6 PM+)', value: 8, color: '#10b981' },
  ];

  const stats = [
    { label: 'Booked (MTD)', val: 65, color: 'purple' },
    { label: 'Show-up Rate', val: 88, suffix: '%', color: 'blue' },
    { label: 'Avg. Lead Time', val: 4.2, suffix: 'd', decimals: 1, color: 'green' },
    { label: 'Qualified Ops', val: 12, color: 'orange' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-up">
      <p className="text-[11px] text-green-400 font-black uppercase tracking-[0.2em] mb-[-1.5rem] drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">Agent status (Active🟢)</p>

      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Meeting Intelligence</h1>
          <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Analytics & Booking Trends</p>
        </div>
        <div className="flex gap-4">

        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <GlassCard key={i} className="py-4 group">
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1 group-hover:text-gray-400">{s.label}</p>
            <p className={`text-2xl font-black text-${s.color}-400 drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]`}>
              <AnimateNumber value={s.val} suffix={s.suffix} decimals={s.decimals} />
            </p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard title="Calls Booked Per Week">
          <div className="h-64 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis
                  dataKey="week"
                  stroke="#6b7280"
                  fontSize={10}
                  fontWeight="black"
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="glass-panel p-2 border border-white/10 rounded-lg">
                          <p className="text-[10px] text-purple-400 font-black uppercase">{payload[0].value} Calls</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="calls"
                  fill="#818cf8"
                  radius={[6, 6, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard title="Time Distribution">
          <div className="h-64 mt-4 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={timeDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {timeDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="glass-panel p-2 border border-white/10 rounded-lg">
                          <p className="text-[10px] text-white font-black uppercase">{payload[0].name}</p>
                          <p className="text-[10px] text-blue-400 font-black">{payload[0].value} Calls</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <p className="text-2xl font-black text-white">42</p>
              <p className="text-[8px] text-gray-500 font-black uppercase tracking-widest">Total</p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {timeDistributionData.map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-[9px] text-gray-400 font-black uppercase">{item.name.split(' (')[0]}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em]">Who Booked</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-sm text-gray-400 font-black text-left">
                <th className="px-6 py-4">Person Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Time</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Sarah Johnson', email: 's.johnson@techcorp.com', time: '01/04/26 at 3:00 PM' },
                { name: 'Marcus Aurelius', email: 'aurelius@empire.io', time: '01/05/26 at 11:00 AM' },
                { name: 'Emily Watts', email: 'emily@cloudscale.net', time: '01/06/26 at 1:30 PM' },
                { name: 'Jessica Bloom', email: 'jess.b@flow.ai', time: '01/11/26 at 4:45 PM' },
              ].map((call, idx) => (
                <tr key={idx} className="group cursor-default">
                  <td className="px-6 py-5 rounded-l-2xl glass-panel border-y border-l border-white/5 group-hover:bg-white/[0.02] transition-colors">
                    <span className="text-base font-black text-white group-hover:text-purple-400 transition-colors tracking-tight">
                      {call.name}
                    </span>
                  </td>
                  <td className="px-6 py-5 glass-panel border-y border-white/5 group-hover:bg-white/[0.02] transition-colors">
                    <span className="text-sm text-gray-400 font-bold tracking-tight italic">
                      {call.email}
                    </span>
                  </td>
                  <td className="px-6 py-5 glass-panel border-y border-white/5 group-hover:bg-white/[0.02] transition-colors">
                    <span className="text-sm text-gray-500 font-black uppercase tracking-tight">
                      {call.time}
                    </span>
                  </td>
                  <td className="px-6 py-5 rounded-r-2xl glass-panel border-y border-r border-white/5 group-hover:bg-white/[0.02] transition-colors">
                    <span className="px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg text-[10px] font-black text-green-500 uppercase tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                      Booked
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CallsBooker;
