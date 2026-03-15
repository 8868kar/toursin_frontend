import React, { useEffect, useState } from 'react';
import { CheckCircle, Calendar, Users, MapPin, Download, Home, Share2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function BookingSuccess() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const bookingId = params.get('id') || `TIN-${Date.now().toString().slice(-6)}`;
    const [count, setCount] = useState(5);

    // Countdown auto-redirect
    useEffect(() => {
        if (count <= 0) return;
        const t = setTimeout(() => setCount(c => c - 1), 1000);
        return () => clearTimeout(t);
    }, [count]);

    const booking = {
        id: bookingId,
        tour: 'Kashmir Valley Expedition',
        date: '24 March 2026',
        travelers: 2,
        location: 'Srinagar, Kashmir',
        total: '₹49,998',
        hotel: 'Dal Lake Houseboat Premium',
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4 py-16">
            <Helmet>
                <title>Booking Confirmed! – ToursIn</title>
            </Helmet>

            <div className="max-w-lg w-full">
                {/* Success Animation */}
                <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <CheckCircle size={52} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2">Booking Confirmed! 🎉</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
                        Your adventure is officially on the calendar!
                    </p>
                </div>

                {/* Booking Card */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden mb-6">
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-emerald-100 text-sm font-bold uppercase tracking-widest mb-1">Booking ID</p>
                                <p className="text-2xl font-black">{booking.id}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-emerald-100 text-sm font-bold">Total Paid</p>
                                <p className="text-2xl font-black">{booking.total}</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Details */}
                    <div className="p-6 space-y-4">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white">{booking.tour}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <Calendar size={18} className="text-emerald-600" />, label: 'Departure', value: booking.date },
                                { icon: <Users size={18} className="text-blue-600" />, label: 'Travelers', value: `${booking.travelers} People` },
                                { icon: <MapPin size={18} className="text-rose-600" />, label: 'Location', value: booking.location },
                                { icon: <CheckCircle size={18} className="text-amber-600" />, label: 'Hotel', value: booking.hotel },
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
                                    <div className="flex items-center gap-2 mb-1">{item.icon}<span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</span></div>
                                    <p className="font-black text-slate-900 dark:text-white text-sm">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 text-sm text-amber-700 dark:text-amber-300 font-medium">
                            📧 Booking confirmation & e-ticket has been sent to your registered email.
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <Link to="/" className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold transition-all">
                        <Home size={20} /> Go Home
                    </Link>
                    <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-5 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                        <Share2 size={20} />
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-5 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                        <Download size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
