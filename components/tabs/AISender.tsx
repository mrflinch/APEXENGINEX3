
import React from 'react';
import { 
  Play,
  Pause,
  Clock,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import GlassCard from '../GlassCard';
import AnimateNumber from '../AnimateNumber';

const performanceData = [
  { time: '9am', opens: 120, clicks: 45, replies: 12 },
  { time: '12pm', opens: 340, clicks: 120, replies: 28 },
  { time: '3pm', opens: 280, clicks: 85, replies: 18 },
  { time: '6pm', opens: 450, clicks: 180, replies: 35 },
  { time: '9pm', opens: 180, clicks: 60, replies: 8 },
];

const weeklyData = [
  { day: 'Mon', sent: 800 },
  { day: 'Tue', sent: 1200 },
  { day: 'Wed', sent: 1500 },
  { day: 'Thu', sent: 1100 },
  { day: 'Fri', sent: 900 },
];

const COLORS = ['#7c3aed', '#3b82f6', '#10b981', '#f59e0b', '#ec4899'];

const AISender: React.FC = () => {
  return (
    <div className="space-y-8 pb-12 animate-fade-up">
      <p className="text-[11px] text-green-400 font-black uppercase tracking-[0.2em] mb-[-1.5rem] drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">Agent status (Active🟢)</p>

      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-white mb-2">Campaign Performance</h1>
          <p className="text-gray-400 font-black">Monitoring real-time delivery across 6 active automation agents</p>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="relative">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-black text-white">Q4 SaaS Founders</h3>
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-black rounded flex items-center gap-1 w-fit mt-1 shadow-[0_0_10px_rgba(34,197,94,0.3)] border border-green-500/20">
                <Play className="w-2.5 h-2.5 fill-current" /> ACTIVE
              </span>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-white text-glow-purple">
                <AnimateNumber value={74} suffix="%" />
              </p>
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Progress</p>
            </div>
          </div>
          
          <div className="w-full bg-white/5 h-2 rounded-full mb-8 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-[0_0_12px_rgba(124,58,237,0.6)] transition-all duration-[2000ms] ease-out" 
              style={{ width: '74%' }}
            ></div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Sent</p>
              <p className="text-lg font-black"><AnimateNumber value={1240} /></p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Open</p>
              <p className="text-lg font-black text-purple-400 text-glow-purple"><AnimateNumber value={58} suffix="%" /></p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Click</p>
              <p className="text-lg font-black text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"><AnimateNumber value={12} suffix="%" /></p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Reply</p>
              <p className="text-lg font-black text-green-400 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]"><AnimateNumber value={4.2} suffix="%" decimals={1} /></p>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
           <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-black text-white">Series A Outreach</h3>
              <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-[10px] font-black rounded flex items-center gap-1 w-fit mt-1 uppercase tracking-widest border border-orange-500/20">
                <Pause className="w-2.5 h-2.5 fill-current" /> PAUSED
              </span>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-white"><AnimateNumber value={42} suffix="%" /></p>
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Progress</p>
            </div>
          </div>
          
          <div className="w-full bg-white/5 h-2 rounded-full mb-8 overflow-hidden">
            <div 
              className="h-full bg-orange-500/40 rounded-full transition-all duration-[2000ms] ease-out" 
              style={{ width: '42%' }}
            ></div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 opacity-60 text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Sent</p>
              <p className="text-lg font-black"><AnimateNumber value={850} /></p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 opacity-60 text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Open</p>
              <p className="text-lg font-black"><AnimateNumber value={62} suffix="%" /></p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 opacity-60 text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Click</p>
              <p className="text-lg font-black text-blue-400/60"><AnimateNumber value={18} suffix="%" /></p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 opacity-60 text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase mb-1">Reply</p>
              <p className="text-lg font-black text-green-400/60"><AnimateNumber value={6.8} suffix="%" decimals={1} /></p>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard title="Engagement Flow" subtitle="Real-time hourly interactions">
          <div className="h-[250px] mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 10, fontWeight: 900}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 10, fontWeight: 900}} />
                <Tooltip 
                  contentStyle={{backgroundColor: '#0f1419', border: '1px solid #ffffff10', borderRadius: '12px'}}
                />
                <Line type="monotone" dataKey="opens" stroke="#7c3aed" strokeWidth={4} dot={false} isAnimationActive={true} animationDuration={1500} style={{ filter: 'drop-shadow(0 0 8px rgba(124,58,237,0.6))' }} />
                <Line type="monotone" dataKey="clicks" stroke="#3b82f6" strokeWidth={4} dot={false} isAnimationActive={true} animationDuration={1500} animationBegin={300} style={{ filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.6))' }} />
                <Line type="monotone" dataKey="replies" stroke="#10b981" strokeWidth={4} dot={false} isAnimationActive={true} animationDuration={1500} animationBegin={600} style={{ filter: 'drop-shadow(0 0 8px rgba(16,185,129,0.6))' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard title="Weekly Volume" subtitle="Total emails dispatched">
          <div className="h-[250px] mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 10, fontWeight: 900}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 10, fontWeight: 900}} />
                <Tooltip contentStyle={{backgroundColor: '#0f1419', border: '1px solid #ffffff10', borderRadius: '12px'}} cursor={{fill: '#ffffff05'}} />
                <Bar dataKey="sent" radius={[4, 4, 0, 0]} isAnimationActive={true} animationDuration={1500}>
                  {weeklyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} style={{ filter: 'drop-shadow(0 0 6px ' + COLORS[index % COLORS.length] + '90)' }} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-1 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-purple-400 drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]" />
            <h4 className="text-sm font-black text-white uppercase tracking-widest text-glow-purple">Optimized Timing</h4>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400 font-black uppercase">Window</span>
              <span className="text-sm font-black text-white">10:00 - 11:30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400 font-black uppercase">Top Day</span>
              <span className="text-sm font-black text-white">Wednesday</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2" title="Live Activity Feed" subtitle="Immediate system updates">
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 text-[10px] text-gray-500 uppercase font-black tracking-widest">
                  <th className="pb-4 px-2">Prospect</th>
                  <th className="pb-4 px-2">Campaign</th>
                  <th className="pb-4 px-2">Status</th>
                  <th className="pb-4 px-2 text-right">Link</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: 'Sarah Johnson', camp: 'Q4 Founders', status: 'Replied', color: 'green' },
                  { name: 'Michael Chen', camp: 'Series A', status: 'Opened', color: 'purple' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-2 font-black text-white">{row.name}</td>
                    <td className="py-4 px-2 text-gray-400 font-black uppercase tracking-widest text-[10px]">{row.camp}</td>
                    <td className="py-4 px-2">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-black border border-current bg-${row.color}-500/10 text-${row.color}-400 uppercase tracking-widest drop-shadow-[0_0_5px_currentColor]`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-500 hover:text-white"><ArrowUpRight className="w-4 h-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default AISender;
