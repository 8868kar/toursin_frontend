import React, { useState } from 'react';
import { User, MapPin, Calendar, Star, Heart, Clock, ChevronRight, Edit2, LogOut, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { POSTERS } from '../data';

const MOCK_BOOKINGS = [
    { id: 'TIN-2026-001', tour: POSTERS[0], date: '24 Mar 2026', travelers: 2, status: 'Upcoming', paid: '₹49,998' },
    { id: 'TIN-2025-088', tour: POSTERS[1], date: '10 Jan 2026', travelers: 4, status: 'Completed', paid: '₹49,996' },
    { id: 'TIN-2025-045', tour: POSTERS[2], date: '15 Oct 2025', travelers: 2, status: 'Completed', paid: '₹65,998' },
];

const STATUS_STYLE = {
    Upcoming: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    Completed: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    Cancelled: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
};

const TABS = ['My Bookings', 'Wishlist', 'Profile Settings'];

export default function Profile() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('My Bookings');
    const [wishlist] = useState(
        JSON.parse(localStorage.getItem('toursin-wishlist') || '[]')
    );

    const wishlistedTours = POSTERS.filter(p => wishlist.includes(p.id));

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            {/* Profile Header */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 pt-8 pb-0 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 pb-0">
                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-24 h-24 bg-emerald-600 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-2xl border-4 border-slate-700">
                                KS
                            </div>
                            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-lg text-slate-600 dark:text-slate-300 hover:bg-emerald-50">
                                <Edit2 size={14} />
                            </button>
                        </div>
                        <div className="flex-1 pb-6">
                            <h1 className="text-2xl font-black text-white">Kartik Sharma</h1>
                            <p className="text-slate-400 font-medium mt-1 flex items-center gap-2">
                                <MapPin size={14} /> Chandigarh, India
                            </p>
                            <div className="flex items-center gap-4 mt-3">
                                <span className="text-sm font-bold text-slate-400">{MOCK_BOOKINGS.length} Trips</span>
                                <span className="text-slate-600">·</span>
                                <span className="text-sm font-bold text-slate-400">{wishlistedTours.length} Saved</span>
                                <span className="text-slate-600">·</span>
                                <span className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                                    <Star size={14} className="fill-emerald-400" /> Verified Traveler
                                </span>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm transition-colors self-start sm:self-center mb-6">
                            <LogOut size={16} /> Sign Out
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-1 border-b border-slate-700">
                        {TABS.map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)}
                                className={`px-5 py-3 font-bold text-sm transition-all border-b-2 -mb-0.5 ${
                                    activeTab === tab
                                        ? 'border-emerald-400 text-emerald-400'
                                        : 'border-transparent text-slate-400 hover:text-slate-200'
                                }`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-5xl mx-auto px-4 py-10">

                {/* My Bookings */}
                {activeTab === 'My Bookings' && (
                    <div className="space-y-5">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Your Bookings</h2>
                        {MOCK_BOOKINGS.map(bkn => (
                            <div key={bkn.id} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                                <div className="flex flex-col sm:flex-row">
                                    <img src={bkn.tour.image} alt={bkn.tour.title}
                                        className="w-full sm:w-40 h-36 sm:h-auto object-cover flex-shrink-0"
                                        loading="lazy" />
                                    <div className="p-5 flex-1 flex flex-col justify-between">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{bkn.id}</p>
                                                <h3 className="text-xl font-black text-slate-900 dark:text-white">{bkn.tour.title}</h3>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-black uppercase flex-shrink-0 ${STATUS_STYLE[bkn.status]}`}>
                                                {bkn.status}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mt-3">
                                            <span className="flex items-center gap-1.5"><Calendar size={15} /> {bkn.date}</span>
                                            <span className="flex items-center gap-1.5"><User size={15} /> {bkn.travelers} Travelers</span>
                                            <span className="flex items-center gap-1.5"><Clock size={15} /> {bkn.tour.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                            <div>
                                                <p className="text-xs text-slate-400 font-medium">Total Paid</p>
                                                <p className="text-xl font-black text-slate-900 dark:text-white">{bkn.paid}</p>
                                            </div>
                                            <button onClick={() => navigate(`/tour/${bkn.tour.id}`)}
                                                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition-all">
                                                View Details <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Wishlist */}
                {activeTab === 'Wishlist' && (
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Saved Tours</h2>
                        {wishlistedTours.length === 0 ? (
                            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                                <Heart size={48} className="mx-auto text-slate-300 dark:text-slate-700 mb-4" />
                                <h3 className="text-xl font-black text-slate-500 dark:text-slate-400 mb-2">No Saved Tours Yet</h3>
                                <p className="text-slate-400 font-medium mb-6">Tap the ❤️ heart on any tour to save it here!</p>
                                <button onClick={() => navigate('/tours')}
                                    className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">
                                    Browse Tours
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {wishlistedTours.map(tour => (
                                    <div key={tour.id} onClick={() => navigate(`/tour/${tour.id}`)}
                                        className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-800 cursor-pointer transition-all hover:-translate-y-1">
                                        <div className="h-48 overflow-hidden relative">
                                            <img src={tour.image} alt={tour.title} loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                                            <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1 shadow">
                                                <Star size={12} className="text-amber-400 fill-amber-400" />
                                                <span className="text-xs font-black text-slate-900">{tour.rating}</span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-black text-slate-900 dark:text-white text-lg mb-1">{tour.title}</h3>
                                            <div className="flex items-center justify-between mt-3">
                                                <p className="text-2xl font-black text-slate-900 dark:text-white">{tour.price}</p>
                                                <span className="text-slate-400 text-sm font-medium">{tour.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Profile Settings */}
                {activeTab === 'Profile Settings' && (
                    <div className="max-w-lg">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Edit Profile</h2>
                        <form className="space-y-5 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md">
                            {[
                                { label: 'Full Name', value: 'Kartik Sharma', type: 'text' },
                                { label: 'Email Address', value: 'kartik@example.com', type: 'email' },
                                { label: 'Phone Number', value: '+91 98765 43210', type: 'tel' },
                                { label: 'City', value: 'Chandigarh', type: 'text' },
                            ].map((field, i) => (
                                <div key={i}>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">{field.label}</label>
                                    <input type={field.type} defaultValue={field.value}
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-slate-900 dark:text-white font-medium" />
                                </div>
                            ))}
                            <button type="button" className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all">
                                Save Changes
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
