"use client";

export default function CallNowButton() {
    return (
        <a
            href="tel:+15551234567"
            className="fixed bottom-6 left-6 z-50 lg:hidden flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-sky via-teal to-emerald text-white font-body font-semibold text-sm shadow-xl shadow-sky/30 hover:shadow-sky/50 active:scale-95 transition-all duration-200 animate-[pulse-glow_3s_ease-in-out_infinite]"
            aria-label="Call ProFlow Plumbing now"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
            </svg>
            Call Now
        </a>
    );
}
