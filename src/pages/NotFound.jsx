import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-lg mx-auto">
                {/* Animated compass */}
                <div className="flex items-center justify-center mb-8">
                    <div className="w-32 h-32 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center animate-pulse">
                        <Compass size={64} className="text-emerald-400" />
                    </div>
                </div>

                <h1 className="text-[10rem] font-black text-white/5 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    404
                </h1>

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Lost in the <span className="text-emerald-400 italic">Mountains?</span>
                    </h2>
                    <p className="text-slate-400 text-lg font-medium mb-10 leading-relaxed">
                        Looks like this page went on an adventure without us.
                        The destination you're looking for doesn't exist.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_8px_30px_rgb(16,185,129,0.3)] transition-all hover:scale-105"
                        >
                            <Home size={20} /> Back to Home
                        </Link>
                        <Link
                            to="/destinations"
                            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
                        >
                            <MapPin size={20} /> Explore Destinations
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
