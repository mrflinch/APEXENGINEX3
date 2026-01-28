'use client';

import React, { useState } from 'react';
import { InteractiveRobotSpline } from './blocks/interactive-3d-robot';
import { ArrowRight, Lock, Mail, X } from 'lucide-react';

interface LandingPageProps {
    onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
    const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

    // Auth State
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const isEmailValid = email.toLowerCase().includes("advmedia.online");
        const isPasswordValid = password === "Mlkj1234cvbn";

        if (isEmailValid && isPasswordValid) {
            onEnter();
        } else {
            setError("Invalid credentials. Access denied.");
        }
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-[#050506]">
            <style>{`
        /* Comprehensive hack to hide Spline watermark */
        canvas + div, 
        #spline-watermark,
        [class*="spline-watermark"],
        [style*="z-index: 1000000"],
        [style*="z-index:1000000"],
        a[href*="spline.design"],
        .spline-watermark,
        [style*="bottom: 10px; right: 10px;"],
        [style*="bottom:10px;right:10px;"],
        [style*="bottom: 16px; right: 16px;"],
        [style*="bottom:16px;right:16px;"] { 
          display: none !important; 
          opacity: 0 !important; 
          visibility: hidden !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
          z-index: -1 !important;
        }
      `}</style>

            {/* 3D Scene Background */}
            <InteractiveRobotSpline
                scene={ROBOT_SCENE_URL}
                className="absolute inset-0 z-0 scale-105"
            />

            {/* Overlay Content - Positioned top-left with 20px padding */}
            <div className={`absolute inset-0 z-10 pointer-events-none flex flex-col justify-start pt-[26px] md:pt-[58px] pl-5 transition-all duration-700 ${showLoginForm ? 'blur-md opacity-40 scale-95' : 'blur-0 opacity-100 scale-100'}`}>
                <div className="max-w-xl animate-in fade-in slide-in-from-left-4 duration-1000">
                    <h1 className="text-4xl md:text-5xl lg:text-[70px] font-black text-white leading-[0.9] uppercase tracking-tighter">
                        Adventure <br />
                        Media's <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-white">
                            Client <br />
                            Acquisition <br />
                            Engine
                        </span>
                    </h1>

                    {/* Left-aligned Button - Triggers Login Form */}
                    <div className="mt-10 pointer-events-auto">
                        <button
                            onClick={() => setShowLoginForm(true)}
                            className="group relative flex items-center gap-4 px-10 py-4 bg-purple-600 text-white border border-purple-400/50 text-[12px] font-black uppercase tracking-[0.25em] rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(147,51,234,0.5)] hover:shadow-[0_0_70px_rgba(147,51,234,0.9)]"
                        >
                            <span className="relative z-10">Access Dashboard</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform" />

                            {/* Layered Glow Effects */}
                            <div className="absolute -inset-1 bg-purple-500/40 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
                            <div className="absolute -inset-0.5 bg-purple-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Login Form Overlay */}
            {showLoginForm && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300 px-6">
                    <div className="w-full max-w-md bg-[#0a0c10]/80 border border-white/10 rounded-2xl p-8 shadow-2xl relative">
                        <button
                            onClick={() => setShowLoginForm(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-8 text-center">
                            <h2 className="text-2xl font-black text-white uppercase tracking-wider">Verification Required</h2>
                            <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">Enter your credentials to access the engine</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all text-sm font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] ml-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all text-sm font-medium"
                                        placeholder="••••••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="text-red-500 text-[10px] font-black uppercase tracking-wider text-center animate-bounce">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full py-4 bg-white text-black font-black uppercase tracking-[0.3em] text-[11px] rounded-xl hover:bg-purple-600 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
                            >
                                Verify & Access
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Patch to physically cover Spline watermark */}
            <div className="absolute bottom-0 right-0 w-[140px] h-[45px] bg-[#050506] z-[100] pointer-events-auto" />
        </div>
    );
}
