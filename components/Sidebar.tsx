
import React, { useState } from 'react';
import {
  Users,
  Send,
  Filter,
  Calendar,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { AppTab } from '../types';
import GlassCard from './GlassCard';

interface SidebarProps {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const navItems = [
    { name: AppTab.LEAD_FINDING, icon: Users },
    { name: AppTab.AI_SENDER, icon: Send },
    { name: AppTab.QUALIFICATION, icon: Filter },
    { name: AppTab.CALLS_BOOKER, icon: Calendar },
  ];

  return (
    <aside
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
      className={`glass-panel border-r border-white/5 hidden md:flex flex-col z-20 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] relative ${isCollapsed ? 'w-20' : 'w-60'}`}
    >
      <div className={`p-6 flex items-center gap-3 transition-all duration-200 ${isCollapsed ? 'justify-center px-0' : ''}`}>
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.6)] ring-1 ring-purple-400/30">
          <Sparkles className="text-white w-6 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
        </div>
        {!isCollapsed && (
          <span className="text-lg font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 uppercase whitespace-nowrap overflow-hidden animate-in fade-in slide-in-from-left-2 text-glow-purple">
            Apex Engine
          </span>
        )}
      </div>

      <nav className="flex-1 px-4 space-y-3 mt-4">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => onTabChange(item.name)}
              title={isCollapsed ? item.name : ''}
              className={`w-full flex items-center gap-3 py-3 rounded-xl transition-all duration-300 group relative ${isCollapsed ? 'justify-center px-0' : 'px-4'
                } ${isActive
                  ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 shadow-[inset_0_0_15px_rgba(124,58,237,0.1)] border border-purple-500/20'
                  : 'text-gray-400 hover:text-gray-100 hover:bg-white/5 border border-transparent'
                }`}
            >
              <item.icon className={`w-5 h-5 transition-colors flex-shrink-0 ${isActive ? 'text-purple-400 drop-shadow-[0_0_5px_rgba(124,58,237,0.5)]' : 'group-hover:text-purple-300'}`} />
              {!isCollapsed && (
                <span className={`text-sm font-black uppercase tracking-tight whitespace-nowrap overflow-hidden animate-in fade-in slide-in-from-left-2 ${isActive ? 'text-glow-purple' : ''}`}>{item.name}</span>
              )}
              {isActive && !isCollapsed && (
                <div className="ml-auto w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(124,58,237,1)]" />
              )}
              {isActive && isCollapsed && (
                <div className="absolute right-1 w-1 h-6 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(124,58,237,1)]" />
              )}
            </button>
          );
        })}
      </nav>

      <div className={`p-4 mt-auto transition-all duration-300 ${isCollapsed ? 'px-2' : ''}`}>
        {!isCollapsed ? (
          <GlassCard className="!p-0 border-none bg-transparent">
            <div className="p-4 h-full">
              <p className="text-[10px] text-purple-300 uppercase tracking-widest font-black mb-3">System Status</p>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                  <span className="text-xs text-gray-100 font-black uppercase">Agents Online</span>
                </div>
                <img src="/robot-icon.png" alt="System Status" className="w-12 h-12 opacity-90 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>
            </div>
          </GlassCard>
        ) : (
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
