import React, { useState, useEffect } from 'react';
import { Cookie, X, ShieldCheck } from 'lucide-react';

const COOKIE_KEY = 'toursin-cookie-consent';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_KEY);
        if (!consent) {
            // Small delay so it doesn't flash immediately on load
            const t = setTimeout(() => setVisible(true), 1500);
            return () => clearTimeout(t);
        }
    }, []);

    const accept = () => {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem(COOKIE_KEY, 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-28 left-0 right-0 z-[150] px-4 flex justify-center pointer-events-none">
            <div className="pointer-events-auto max-w-2xl w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-in slide-in-from-bottom-4 duration-500">
                {/* Icon */}
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Cookie size={24} className="text-amber-600 dark:text-amber-400" />
                </div>

                {/* Text */}
                <div className="flex-1">
                    <p className="font-black text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2">
                        <ShieldCheck size={14} className="text-emerald-600" /> We use cookies
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">
                        We use cookies to improve your experience and analyze site traffic. By clicking "Accept", you agree to our{' '}
                        <a href="#" className="text-emerald-600 underline">Privacy Policy</a>.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={decline}
                        className="px-4 py-2 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        Decline
                    </button>
                    <button onClick={accept}
                        className="px-4 py-2 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all">
                        Accept All
                    </button>
                    <button onClick={decline} className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <X size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
