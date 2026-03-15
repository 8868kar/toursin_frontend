import React from 'react';

// Skeleton card — matches the Tour card shape
export function TourCardSkeleton() {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md animate-pulse">
            {/* Image placeholder */}
            <div className="h-56 bg-slate-200 dark:bg-slate-800" />
            {/* Content */}
            <div className="p-6 space-y-3">
                <div className="h-3 w-24 bg-slate-200 dark:bg-slate-700 rounded-full" />
                <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
                <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-700 rounded-full" />
                <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800 mt-2">
                    <div className="h-7 w-24 bg-slate-200 dark:bg-slate-700 rounded-full" />
                    <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded-xl" />
                </div>
            </div>
        </div>
    );
}

// Destination card skeleton
export function DestCardSkeleton() {
    return (
        <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-200 dark:bg-slate-800 animate-pulse" />
    );
}

// Generic line skeleton
export function LineSkeleton({ className = '' }) {
    return <div className={`bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse ${className}`} />;
}
