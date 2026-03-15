import React, { useState } from 'react';
import { Globe, Mountain, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';

const Palm = ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z"/><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/></svg>
);

const DESTINATIONS = {
    'North India': [
        { name: 'Kashmir', tagline: 'Paradise on Earth', tours: 12, image: 'https://images.unsplash.com/photo-1595815771614-ade9d6527653?auto=format&fit=crop&q=80&w=600' },
        { name: 'Ladakh', tagline: 'Land of High Passes', tours: 8, image: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&q=80&w=600' },
        { name: 'Varanasi', tagline: 'The City of Light', tours: 6, image: 'https://images.unsplash.com/photo-1561359313-0639aad48e23?auto=format&fit=crop&q=80&w=600' },
        { name: 'Rajasthan', tagline: 'Land of Kings', tours: 15, image: 'https://images.unsplash.com/photo-1599661509650-7f2409749b5c?auto=format&fit=crop&q=80&w=600' },
        { name: 'Himachal', tagline: 'Dev Bhoomi', tours: 10, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600' },
        { name: 'Uttarakhand', tagline: 'Land of Gods', tours: 9, image: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=600' },
    ],
    'South India': [
        { name: 'Kerala', tagline: "God's Own Country", tours: 11, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600' },
        { name: 'Goa', tagline: 'Pearl of the Orient', tours: 7, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600' },
        { name: 'Coorg', tagline: 'Scotland of India', tours: 5, image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=600' },
    ],
    'International': [
        { name: 'Maldives', tagline: 'Blue Heaven Paradise', tours: 6, image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=600' },
        { name: 'Thailand', tagline: 'Land of Smiles', tours: 8, image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=600' },
        { name: 'Dubai', tagline: 'City of Gold', tours: 5, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600' },
        { name: 'Bali', tagline: 'Island of Gods', tours: 7, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600' },
    ],
};

const REGION_META = {
    'North India': { icon: <Mountain size={20} />, color: 'from-blue-600 to-indigo-700' },
    'South India': { icon: <Palm size={20} />, color: 'from-emerald-600 to-teal-700' },
    'International': { icon: <Globe size={20} />, color: 'from-violet-600 to-purple-700' },
};

export default function Destinations() {
    const navigate = useNavigate();
    const [activeRegion, setActiveRegion] = useState('All');
    const regions = ['All', ...Object.keys(DESTINATIONS)];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">

            {/* Hero */}
            <section className="relative py-20 px-4 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                        <Sparkles size={16} className="text-amber-300" />
                        <span className="text-white text-sm font-bold tracking-widest uppercase">Explore By Destination</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
                        Where Will You <span className="text-emerald-400 italic">Go Next?</span>
                    </h1>
                    <p className="text-slate-300 text-xl font-medium max-w-2xl mx-auto">
                        From the Himalayas to tropical islands — discover your perfect destination across India and the world.
                    </p>
                </div>
            </section>

            {/* Sticky Region Filter */}
            <div className="sticky top-16 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-3 overflow-x-auto">
                    {regions.map(r => (
                        <button key={r} onClick={() => setActiveRegion(r)}
                            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all flex-shrink-0 ${
                                activeRegion === r
                                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                            }`}>
                            {r}
                        </button>
                    ))}
                </div>
            </div>

            {/* Destinations by Region */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                {Object.entries(DESTINATIONS)
                    .filter(([region]) => activeRegion === 'All' || activeRegion === region)
                    .map(([region, dests]) => {
                        const meta = REGION_META[region];
                        return (
                            <div key={region}>
                                {/* Region Header */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.color} flex items-center justify-center text-white shadow-lg`}>
                                            {meta.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-black text-slate-900 dark:text-white">{region}</h2>
                                            <p className="text-slate-500 font-medium text-sm">
                                                {dests.length} destinations · {dests.reduce((a, d) => a + d.tours, 0)} tours
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => navigate('/tours')}
                                        className="hidden sm:flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:underline text-sm">
                                        View all tours <ArrowRight size={16} />
                                    </button>
                                </div>

                                {/* Destination Cards */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                                    {dests.map(dest => (
                                        <DestinationCard key={dest.name} destination={dest} />
                                    ))}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
