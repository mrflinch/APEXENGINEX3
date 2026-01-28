
import React, { useState } from 'react';
import {
  Filter,
  Search,
  User,
  Mail,
  MousePointer2,
  MessageSquare,
  ChevronRight,
  Sparkles,
  Calendar
} from 'lucide-react';
import GlassCard from '../GlassCard';

const Qualification: React.FC = () => {
  const [selectedLead, setSelectedLead] = useState<number | null>(0);

  const leads = [
    { id: 0, name: 'Sarah Johnson', company: 'TechCorp', role: 'CMO', score: 92, last: '2 mins ago', type: 'reply', email: 's.johnson@techcorp.com' },
    { id: 1, name: 'Marcus Aurelius', company: 'Empire Soft', role: 'VP Sales', score: 84, last: '1 hour ago', type: 'click', email: 'aurelius@empire.io' },
    { id: 2, name: 'Jessica Bloom', company: 'Flow.ai', role: 'CEO', score: 72, last: '3 hours ago', type: 'open', email: 'jess.b@flow.ai' },
    { id: 4, name: 'Emily Watts', company: 'CloudScale', role: 'Founder', score: 96, last: '10 mins ago', type: 'reply', email: 'emily@cloudscale.net' },
  ];

  const currentLead = leads.find(l => l.id === selectedLead) || leads[0];

  const ScoreBars = ({ score }: { score: number }) => {
    const totalBars = 10;
    const filledBars = Math.round((score / 100) * totalBars);

    return (
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(totalBars)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-3.5 rounded-sm transition-all duration-500 ${i < filledBars
                ? 'bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]'
                : 'bg-white/5'
                }`}
            />
          ))}
        </div>
        <span className="text-[11px] font-black text-white/70 w-8">{score}%</span>
      </div>
    );
  };

  return (
    <div className="space-y-8 pb-12 animate-fade-up">
      <p className="text-[11px] text-green-400 font-black uppercase tracking-[0.2em] mb-[-1.5rem] drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">Agent status (Active🟢)</p>

      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-white mb-2">Engaged Prospect Pipeline</h1>
          <p className="text-gray-400 font-black">Qualification triggers & AI behavior scoring</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-[10px] text-gray-500 font-black uppercase tracking-[0.15em] text-left">
                  <th className="px-4 pb-2">Person Name</th>
                  <th className="px-4 pb-2">Company Name</th>
                  <th className="px-4 pb-2">Email</th>
                  <th className="px-4 pb-2">The Score</th>
                  <th className="px-4 pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => setSelectedLead(lead.id)}
                    className={`group cursor-pointer transition-all duration-300 ${selectedLead === lead.id ? 'translate-x-1' : ''
                      }`}
                  >
                    <td className={`p-4 rounded-l-2xl border-y border-l transition-all ${selectedLead === lead.id
                      ? 'bg-purple-500/10 border-purple-500/30'
                      : 'glass-panel border-white/5 hover:border-white/10'
                      }`}>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-white group-hover:text-purple-400 transition-colors uppercase tracking-tight">
                          {lead.name}
                        </span>
                        <span className="text-[10px] text-gray-500 font-black uppercase mt-0.5">
                          {lead.role}
                        </span>
                      </div>
                    </td>
                    <td className={`p-4 border-y transition-all ${selectedLead === lead.id
                      ? 'bg-purple-500/10 border-purple-500/30'
                      : 'glass-panel border-white/5 hover:border-white/10'
                      }`}>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
                        <span className="text-xs text-gray-400 font-black uppercase tracking-tight">
                          {lead.company}
                        </span>
                      </div>
                    </td>
                    <td className={`p-4 border-y transition-all ${selectedLead === lead.id
                      ? 'bg-purple-500/10 border-purple-500/30'
                      : 'glass-panel border-white/5 hover:border-white/10'
                      }`}>
                      <span className="text-xs text-gray-400 font-black uppercase tracking-tight">
                        {lead.email}
                      </span>
                    </td>
                    <td className={`p-4 border-y transition-all ${selectedLead === lead.id
                      ? 'bg-purple-500/10 border-purple-500/30'
                      : 'glass-panel border-white/5 hover:border-white/10'
                      }`}>
                      <ScoreBars score={lead.score} />
                    </td>
                    <td className={`p-4 rounded-r-2xl border-y border-r transition-all ${selectedLead === lead.id
                      ? 'bg-purple-500/10 border-purple-500/30'
                      : 'glass-panel border-white/5 hover:border-white/10'
                      }`}>
                      <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[9px] font-black text-green-400 uppercase tracking-widest shadow-[0_0_10px_rgba(34,197,94,0.15)]">
                        Qualified
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-1">
          <GlassCard className="sticky top-8 border-purple-500/20">
            <div className="text-center pb-8 border-b border-white/5">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/30 flex items-center justify-center mb-4">
                <span className="text-3xl font-black text-purple-400">{currentLead.name[0]}</span>
              </div>
              <h3 className="text-xl font-black text-white uppercase">{currentLead.name}</h3>
              <p className="text-purple-400 text-sm font-black uppercase">{currentLead.role} @ {currentLead.company}</p>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">AI Readiness Insight</h4>
                </div>
                <div className="p-3 bg-purple-500/5 border border-purple-500/20 rounded-xl space-y-2">
                  <p className="text-sm text-gray-300 font-black uppercase">High Intent Detected</p>
                  <ul className="text-xs text-gray-500 list-disc ml-4 space-y-1 font-black uppercase tracking-tighter">
                    <li>Replied within 2m</li>
                    <li>Enterprise Tier Search</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
