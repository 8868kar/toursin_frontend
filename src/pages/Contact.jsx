import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Zod validation schema
const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    phone: z.string().regex(/^[0-9+]{10,13}$/, 'Please enter a valid phone number').optional().or(z.literal('')),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(1, 'Please select a subject'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

const FAQS = [
    { q: 'How do I book a tour?', a: 'Browse our Tours page, click on any package you like, and hit "Book Now". Our team will confirm within 24 hours.' },
    { q: 'Can I customize a tour package?', a: 'Absolutely! WhatsApp or call us and our travel experts will craft a personalized itinerary just for you.' },
    { q: 'What is the cancellation policy?', a: 'Free cancellation up to 7 days before departure. 50% refund within 3-7 days. No refund within 3 days.' },
    { q: 'Are flights included in packages?', a: 'Most packages are land-only (no flights). Flights can be added at extra cost — ask our team.' },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: '', email: '', phone: '', subject: '', message: '' }
    });

    const onSubmit = (data) => {
        // Here you would connect to the API: UserAPI.submitContact(data)
        setTimeout(() => {
            setSubmitted(true);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">

            {/* Hero */}
            <section className="relative py-20 px-4 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423946996279-e2f8f1f3e11b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900" />
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                        <MessageSquare size={16} className="text-emerald-400" />
                        <span className="text-white text-sm font-bold tracking-widest uppercase">Get in Touch</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
                        We're Here to <span className="text-emerald-400 italic">Help</span>
                    </h1>
                    <p className="text-slate-300 text-xl font-medium">
                        Have a question about a tour? Want a custom package? Just say hello — we respond within 2 hours!
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: <Phone size={24} />, title: 'Call Us', info: '+91 98765 43210', sub: 'Mon–Sat, 9am–7pm', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' },
                        { icon: <Mail size={24} />, title: 'Email Us', info: 'hello@toursin.com', sub: 'Reply within 2 hours', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20' },
                        { icon: <MapPin size={24} />, title: 'Visit Us', info: 'Sector 15, Chandigarh', sub: 'Himalaya Tech Park, 4th Floor', color: 'text-rose-600 bg-rose-50 dark:bg-rose-900/20' },
                    ].map((c, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${c.color}`}>
                                {c.icon}
                            </div>
                            <div>
                                <h3 className="font-black text-slate-900 dark:text-white text-lg">{c.title}</h3>
                                <p className="font-bold text-slate-700 dark:text-slate-300 mt-0.5">{c.info}</p>
                                <p className="text-slate-400 text-sm font-medium">{c.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Form + FAQ */}
            <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Contact Form */}
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center h-full text-center py-12">
                            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle size={48} className="text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Message Sent! 🎉</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium mb-6 leading-relaxed">
                                Thanks for reaching out! We'll get back to you within 2 hours during business hours.
                            </p>
                            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                                <Clock size={16} /> Mon–Sat, 9am–7pm IST
                            </div>
                            <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                                className="mt-6 text-emerald-600 font-bold hover:underline text-sm">
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                                        <input {...register('name')} type="text" placeholder="Your name"
                                            className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 font-medium`} />
                                        {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.name.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone (Optional)</label>
                                        <input {...register('phone')} type="tel" placeholder="+91 XXXXX XXXXX"
                                            className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border ${errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 font-medium`} />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.phone.message}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email *</label>
                                    <input {...register('email')} type="email" placeholder="you@example.com"
                                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 font-medium`} />
                                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Subject *</label>
                                    <select {...register('subject')}
                                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border ${errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-slate-900 dark:text-white font-medium`}>
                                        <option value="">Select a subject</option>
                                        <option value="Tour Enquiry">Tour Enquiry</option>
                                        <option value="Custom Package Request">Custom Package Request</option>
                                        <option value="Booking Issue">Booking Issue</option>
                                        <option value="Feedback">Feedback</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {errors.subject && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.subject.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Message *</label>
                                    <textarea {...register('message')} rows={5} placeholder="Tell us about your dream trip..."
                                        className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 font-medium resize-none`} />
                                    {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/>{errors.message.message}</p>}
                                </div>
                                <button type="submit" disabled={isSubmitting}
                                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/50 text-white rounded-xl font-bold text-lg shadow-[0_4px_15px_rgb(16,185,129,0.3)] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <><Send size={20} /> Send Message</>
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>

                {/* FAQs */}
                <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <span className="font-bold text-slate-900 dark:text-white pr-4">{faq.q}</span>
                                    <span className={`text-emerald-600 font-black text-xl flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                {openFaq === i && (
                                    <div className="px-5 pb-5 text-slate-500 dark:text-slate-400 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Map embed placeholder */}
                    <div className="mt-8 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 h-56 bg-slate-200 dark:bg-slate-800 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.362765698066!2d76.7763!3d30.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ0JzAwLjAiTiA3NsKwNDYnMzQuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="ToursIn Office Location"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
