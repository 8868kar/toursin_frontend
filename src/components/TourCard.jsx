import React from 'react';
import { MapPin, Star, Clock, Users, ChevronRight, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useWishlistStore } from '../store/useStore';

export default function TourCard({ tour }) {
    const navigate = useNavigate();
    
    // Connect to Zustand global store
    const wishlist = useWishlistStore((state) => state.wishlist);
    const toggleWishlistStore = useWishlistStore((state) => state.toggleWishlist);
    const isWishlisted = wishlist.includes(tour.id);

    const toggleWishlist = (e) => {
        e.stopPropagation();
        toggleWishlistStore(tour.id);
        if (isWishlisted) {
            toast('Removed from wishlist', { icon: '💔' });
        } else {
            toast.success(`${tour.title} saved to wishlist! ❤️`);
        }
    };

    return (
        <div
            className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
            onClick={() => navigate(`/tour/${tour.id}`)}
        >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img
                    src={tour.image}
                    alt={tour.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                {/* Optional Tags */}
                {tour.tags && tour.tags.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        {tour.tags.slice(0, 1).map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={toggleWishlist}
                    className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md z-10 ${
                        isWishlisted
                            ? 'bg-rose-500 text-white scale-110'
                            : 'bg-white/90 text-slate-500 hover:bg-rose-50 hover:text-rose-500'
                    }`}
                    aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                    <Heart size={16} className={isWishlisted ? 'fill-white' : ''} />
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 shadow-lg z-10">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-slate-900 text-xs font-black">{tour.rating}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-2 mb-2">
                    <MapPin size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        {tour.title.split(' ')[1] || 'India'}
                    </p>
                </div>
                
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 leading-tight">{tour.title}</h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                    {tour.description}
                </p>

                {/* Details Row */}
                <div className="flex items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400 mb-5 pb-5 border-b border-slate-100 dark:border-slate-800">
                    <span className="flex items-center gap-1.5"><Clock size={15} /> {tour.duration}</span>
                    <span className="flex items-center gap-1.5"><Users size={15} /> {tour.guests || '2-8 People'}</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-auto">
                    <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-0.5">Starting from</p>
                        <p className="text-2xl font-black text-slate-900 dark:text-white">{tour.price}</p>
                    </div>
                    <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all group-hover:scale-105">
                        View <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
