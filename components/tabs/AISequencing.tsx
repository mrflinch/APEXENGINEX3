
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Zap,
  RefreshCw,
  Clock,
  UserCheck
} from 'lucide-react';
import GlassCard from '../GlassCard';

const AISequencing: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi Sarah,\n\nI noticed TechCorp recently raised a $12M Series A — congrats to you and the team! \n\nGiven your focus on developer relations, I thought our new Apex Engine automation suite might be relevant for scaling your outreach without losing that CMO-level personalization. We've helped similar SaaS companies in the dev-tool space increase their qualified leads by 40%.\n\nWould you be open to a quick chat next Thursday afternoon?\n\nBest,\nYour Apex Engine Agent";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const variants = [
    { tonality: 'Professional & Direct', preview: "Hi Sarah, Congrats on the Series A. I'm reaching out because...", score: 94 },
    { tonality: 'Friendly & Conversational', preview: "Hey Sarah! Huge news about the funding. I've been following TechCorp...", score: 92 },
    { tonality: 'Educational & Thoughtful', preview: "Sarah, I've been studying how dev-tool companies like TechCorp...", score: 96 }
  ];

  return (
    <div className="space-y-8 pb-12 animate-fade-up">
      <p className="text-[11px] text-green-400 font-black uppercase tracking-[0.2em] mb-[-1.5rem] drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">Agent status (Active🟢)</p>

      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-white mb-2">AI Email Generator</h1>
          <p className="text-gray-400 font-black">Synthesizing personalized outreach using enriched lead context</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Source Data Panel */}
        <GlassCard className="lg:col-span-1" title="Context Engine">
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/20">
              <p className="text-[10px] text-purple-400 font-black uppercase mb-2">Target Data</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10">
                  <img src="https://picsum.photos/seed/sarah/50/50" alt="Sarah" />
                </div>
                <div>
                  <p className="text-sm font-black">Sarah Johnson</p>
                  <p className="text-[10px] text-gray-500 font-black uppercase">CMO @ TechCorp</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Dynamic Triggers</p>
              <div className="space-y-1">
                <div className="px-2 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-[10px] text-blue-300 flex items-center gap-2 font-black">
                  <Zap className="w-3 h-3"/> Funding: $12M Series A
                </div>
                <div className="px-2 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg text-[10px] text-green-300 flex items-center gap-2 font-black">
                  <CheckCircle2 className="w-3 h-3"/> ICP: B2B SaaS DevTools
                </div>
                <div className="px-2 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-lg text-[10px] text-orange-300 flex items-center gap-2 font-black">
                  <Sparkles className="w-3 h-3"/> Role: CMO
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Main Editor */}
        <GlassCard className="lg:col-span-3 border-purple-500/30 shadow-[0_0_50px_rgba(124,58,237,0.1)]">
          <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 bg-white/5 rounded-lg text-xs font-black text-gray-200">Subject: Scaling TechCorp's Outreach</div>
            </div>
            <div className="flex gap-2">
              <span className="text-xs text-gray-500 italic font-black">Tone: Polished</span>
            </div>
          </div>
          
          <div className="min-h-[300px] text-lg text-gray-200 font-black leading-relaxed whitespace-pre-wrap">
            {displayText}
            <span className="cursor-blink"></span>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/20">
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(124,58,237,1)]"></div>
                <span className="text-xs text-purple-300 font-black">Name Insert</span>
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20">
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
                <span className="text-xs text-blue-300 font-black">Company Insert</span>
             </div>
          </div>
        </GlassCard>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-black text-white">Performance Prediction</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {variants.map((v, i) => (
            <GlassCard key={i} className="hover:border-purple-500/30 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-black text-gray-400 uppercase tracking-widest">{v.tonality}</span>
                <span className="text-xs font-black text-purple-400">Score: {v.score}%</span>
              </div>
              <p className="text-sm text-gray-400 mb-6 italic leading-relaxed font-black">"{v.preview}"</p>
              <div className="w-full bg-white/5 h-1 rounded-full">
                <div className="h-full bg-purple-500 rounded-full" style={{width: `${v.score}%`}}></div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISequencing;
