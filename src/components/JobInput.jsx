import { useState, useEffect } from "react";

export default function JobInput() {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  // Show button only after scrolling past Hero section
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setShowButton(rect.top < 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate button in/out
  useEffect(() => {
    if (showButton) {
      setButtonVisible(true);
    } else {
      // Wait for animation before removing from DOM
      const timeout = setTimeout(() => setButtonVisible(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [showButton]);

  return (
    <>
      {/* Floating AI Chatbot Button with animation */}
      {buttonVisible && (
        <button
          className={`fixed bottom-8 right-8 z-50 bg-gradient-to-br from-blue-600 to-indigo-500 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl transition-transform duration-300
            ${showButton ? "animate-fab-in scale-100 opacity-100" : "animate-fab-out scale-90 opacity-0"}
          `}
          onClick={() => setOpen(true)}
          aria-label="Open AI Job Analyzer"
        >
          {/* AI/robot icon SVG */}
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" fill="#fff" />
            <rect x="12" y="18" width="24" height="16" rx="8" fill="#6366F1" />
            <rect x="18" y="10" width="12" height="12" rx="6" fill="#6366F1" />
            <circle cx="18" cy="26" r="2" fill="#fff" />
            <circle cx="30" cy="26" r="2" fill="#fff" />
            <rect x="22" y="32" width="4" height="2" rx="1" fill="#fff" />
            <rect x="8" y="22" width="4" height="8" rx="2" fill="#6366F1" />
            <rect x="36" y="22" width="4" height="8" rx="2" fill="#6366F1" />
            <rect x="23" y="4" width="2" height="6" rx="1" fill="#6366F1" />
          </svg>
        </button>
      )}

      {/* Side Popup */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end items-end">
          {/* Dim background */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-label="Close overlay"
          />
          {/* Popup panel */}
          <div className="relative bg-white rounded-t-2xl rounded-l-2xl shadow-2xl w-full max-w-md p-6 m-4 animate-slideInUp flex flex-col">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="#fff" />
                <rect x="12" y="18" width="24" height="16" rx="8" fill="#6366F1" />
                <rect x="18" y="10" width="12" height="12" rx="6" fill="#6366F1" />
                <circle cx="18" cy="26" r="2" fill="#fff" />
                <circle cx="30" cy="26" r="2" fill="#fff" />
                <rect x="22" y="32" width="4" height="2" rx="1" fill="#fff" />
                <rect x="8" y="22" width="4" height="8" rx="2" fill="#6366F1" />
                <rect x="36" y="22" width="4" height="8" rx="2" fill="#6366F1" />
                <rect x="23" y="4" width="2" height="6" rx="1" fill="#6366F1" />
              </svg>
              Analyze a Job Description
            </h2>
            <textarea
              className="w-full p-4 border rounded"
              rows={6}
              placeholder="Paste job description here..."
            />
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Analyze</button>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          .animate-slideInUp {
            animation: slideInUp 0.25s cubic-bezier(.4,0,.2,1);
          }
          @keyframes slideInUp {
            from { transform: translateY(60px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-fab-in {
            animation: fabIn 0.25s cubic-bezier(.4,0,.2,1);
          }
          .animate-fab-out {
            animation: fabOut 0.15s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fabIn {
            from { transform: scale(0.7); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes fabOut {
            from { transform: scale(1); opacity: 1; }
            to { transform: scale(0.7); opacity: 0; }
          }
        `}
      </style>
    </>
  );
}