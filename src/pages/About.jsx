import React from 'react';
import { Compass, Users, ShieldCheck, Star, MapPin, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const TEAM = [
    { name: 'Arjun Sharma', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', loc: 'Chandigarh' },
    { name: 'Priya Mehta', role: 'Head of Experiences', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b131?w=200&h=200&fit=crop&crop=face', loc: 'Shimla' },
    { name: 'Rohit Verma', role: 'Lead Travel Curator', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face', loc: 'Manali' },
    { name: 'Sneha Joshi', role: 'Customer Happiness', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face', loc: 'Jaipur' },
];

const STATS = [
    { value: '5,000+', label: 'Happy Travelers', icon: <Users size={28} /> },
    { value: '50+', label: 'Destinations', icon: <MapPin size={28} /> },
    { value: '4.9/5', label: 'Average Rating', icon: <Star size={28} className="fill-current" /> },
    { value: '8+', label: 'Years of Trust', icon: <ShieldCheck size={28} /> },
];

export default function About() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            <Helmet>
                <title>About Us – ToursIn | Our Story, Mission &amp; Team</title>
                <meta name="description" content="Learn about ToursIn — India's most trusted travel company. Meet our team and discover our mission to make India's beauty accessible to everyone." />
            </Helmet>

            {/* Hero */}
            <section className="relative py-24 px-4 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                        <Heart size={16} className="text-rose-400 fill-rose-400" />
                        <span className="text-white text-sm font-bold tracking-widest uppercase">Our Story</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        We Live &amp; Breathe <span className="text-emerald-400 italic">Travel</span>
                    </h1>
                    <p className="text-slate-300 text-xl font-medium leading-relaxed">
                        ToursIn was born from a simple dream — to help every Indian experience the breathtaking beauty of our own country, one unforgettable journey at a time.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-4 max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {STATS.map((s, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl p-6 text-center shadow-md border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-4">
                                {s.icon}
                            </div>
                            <p className="text-3xl font-black text-slate-900 dark:text-white">{s.value}</p>
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Mission</span>
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                            Making India Accessible, One Tour at a Time
                        </h2>
                        <div className="space-y-5 text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                            <p>
                                We believe the most extraordinary destinations don't always require a passport. India's diversity — from snow-capped Himalayan peaks to golden Rajasthani deserts to serene Kerala backwaters — is unparalleled.
                            </p>
                            <p>
                                Our mission is to craft personalized, responsible travel experiences that create lasting memories, support local communities, and make premium travel accessible to every Indian family.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-3 p-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800">
                            <Compass size={32} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                            <p className="text-emerald-700 dark:text-emerald-300 font-bold">
                                "We don't just plan trips. We craft chapters of your life story."
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none" />
                        <img
                            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80"
                            alt="Himalayan landscape"
                            className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover h-[450px]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 px-4 bg-white dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">The People</span>
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Meet Our Team</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {TEAM.map((member, i) => (
                            <div key={i} className="group text-center">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-3xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                                        loading="lazy"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-xl shadow-md">
                                        <MapPin size={12} className="inline mr-1" />{member.loc}
                                    </div>
                                </div>
                                <h3 className="font-black text-slate-900 dark:text-white text-lg">{member.name}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
