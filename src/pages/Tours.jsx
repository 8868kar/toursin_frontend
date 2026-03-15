import React, { useState, useEffect } from 'react';
import { Filter, Search, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { POSTERS } from '../data';
import { TourCardSkeleton } from '../components/Skeleton';
import TourCard from '../components/TourCard';
import { useWishlistStore } from '../store/useStore';

const FILTERS = ['All Tours', 'Adventure', 'Spiritual', 'Romantic', 'Family'];

// Removed old localStorage helpers

export default function Tours() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All Tours');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    
    // Wishlist is now managed by global store and accessed directly in TourCard
    // but we can subscribe to it here if we need its length
    const wishlist = useWishlistStore((state) => state.wishlist);

    // Simulate API loading
    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 900);
        return () => clearTimeout(t);
    }, []);

    // Extend POSTERS with travel style tags for filtering
    const toursWithTags = POSTERS.map((tour, i) => ({
        ...tour,
        tags: [
            i === 0 ? 'Adventure' : i === 1 ? 'Spiritual' : 'Romantic',
            'Family'
        ],
        guests: i === 0 ? '2-10 People' : i === 1 ? '1-8 People' : '4-15 People',
    }));

    const filtered = toursWithTags.filter(tour => {
        const matchFilter = activeFilter === 'All Tours' || tour.tags.includes(activeFilter);
        const matchSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tour.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchFilter && matchSearch;
    });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">

            {/* Hero Banner */}
            <section className="relative py-20 px-4 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                        <Sparkles size={16} className="text-amber-300" />
                        <span className="text-white text-sm font-bold tracking-widest uppercase">All Tour Packages</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
                        Explore Every <span className="text-emerald-400 italic">Journey</span>
                    </h1>
                    <p className="text-slate-300 text-xl font-medium mb-10 max-w-2xl mx-auto">
                        Browse our complete collection of handcrafted tour packages.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search for tours, places..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/50 rounded-full text-lg font-medium outline-none focus:ring-2 focus:ring-emerald-500/50"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Filter Tabs */}
                <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 hide-scrollbar">
                    <Filter size={18} className="text-slate-400 flex-shrink-0" />
                    {FILTERS.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                                activeFilter === f
                                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                    <span className="ml-auto text-sm font-bold text-slate-400 whitespace-nowrap flex-shrink-0">
                        {filtered.length} tour{filtered.length !== 1 ? 's' : ''} found
                    </span>
                </div>

                {/* Loading Skeletons */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => <TourCardSkeleton key={i} />)}
                    </div>
                ) : filtered.length === 0 ? (
                    /* Empty State */
                    <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                        <Search size={48} className="mx-auto mb-4 text-slate-300 dark:text-slate-700" />
                        <p className="text-xl font-black text-slate-500 dark:text-slate-400">No tours found for "{searchQuery}"</p>
                        <p className="mt-2 text-slate-400 font-medium">Try "Kashmir", "Varanasi", or "Rajasthan".</p>
                        <button onClick={() => setSearchQuery('')}
                            className="mt-6 text-emerald-600 font-bold hover:underline text-sm">
                            Clear search
                        </button>
                    </div>
                ) : (
                    /* Tour Cards Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map(tour => (
                            <TourCard key={tour.id} tour={tour} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
