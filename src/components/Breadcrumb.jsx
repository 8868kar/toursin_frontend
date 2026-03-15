import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumb component
 * Usage: <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Tours', to: '/tours' }, { label: 'Kashmir' }]} />
 * Last item (no `to`) is the current page — shown as plain text.
 */
export default function Breadcrumb({ items = [] }) {
    if (!items.length) return null;

    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm font-medium py-3">
            <Link to="/" className="text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1">
                <Home size={14} />
            </Link>
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    <ChevronRight size={14} className="text-slate-300 dark:text-slate-600 flex-shrink-0" />
                    {item.to ? (
                        <Link to={item.to} className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors whitespace-nowrap">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-slate-900 dark:text-white font-bold whitespace-nowrap truncate max-w-[200px]">
                            {item.label}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
}
