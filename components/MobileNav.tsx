import React from 'react';
import {
    Users,
    Send,
    Filter,
    Calendar,
} from 'lucide-react';
import { AppTab } from '../types';

interface MobileNavProps {
    activeTab: AppTab;
    onTabChange: (tab: AppTab) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeTab, onTabChange }) => {
    const navItems = [
        { name: AppTab.LEAD_FINDING, icon: Users, label: 'Leads' },
        { name: AppTab.AI_SENDER, icon: Send, label: 'Sender' },
        { name: AppTab.QUALIFICATION, icon: Filter, label: 'Qualify' },
        { name: AppTab.CALLS_BOOKER, icon: Calendar, label: 'Calls' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* Glass Panel Background */}
            <div className="glass-panel border-t border-white/10 pb-safe">
                <nav className="flex items-center justify-around p-2">
                    {navItems.map((item) => {
                        const isActive = activeTab === item.name;
                        return (
                            <button
                                key={item.name}
                                onClick={() => onTabChange(item.name)}
                                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 relative group
                  ${isActive
                                        ? 'text-purple-400'
                                        : 'text-gray-500 hover:text-gray-300'
                                    }`}
                            >
                                <div className={`p-2 rounded-full transition-all duration-300 ${isActive
                                        ? 'bg-purple-500/20 shadow-[0_0_15px_rgba(124,58,237,0.3)]'
                                        : 'bg-transparent'
                                    }`}>
                                    <item.icon className={`w-5 h-5 ${isActive ? 'drop-shadow-[0_0_5px_rgba(124,58,237,0.5)]' : ''}`} />
                                </div>

                                <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? 'text-glow-purple' : ''
                                    }`}>
                                    {item.label}
                                </span>

                                {/* Active Indicator Dot */}
                                {isActive && (
                                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(124,58,237,1)]" />
                                )}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default MobileNav;
