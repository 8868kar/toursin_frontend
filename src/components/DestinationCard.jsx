import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DestinationCard({ destination }) {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate('/tours')}
            className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
            <img 
                src={destination.image} 
                alt={destination.name} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
            
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="flex items-center gap-1.5 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MapPin size={12} className="text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-bold">Explore</span>
                </div>
                
                <h3 className="text-white font-black text-xl leading-tight mb-1">{destination.name}</h3>
                <p className="text-slate-300 text-xs font-medium mb-3">{destination.tagline}</p>
                
                <div className="flex items-center justify-between">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                        {destination.tours} tours
                    </span>
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                        <ChevronRight size={16} className="text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}
