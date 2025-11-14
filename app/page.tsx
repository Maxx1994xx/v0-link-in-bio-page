'use client'

import { CheckCircle2 } from 'lucide-react'

const offers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  label: `Offer ${i + 1}`,
  url:
    i < 3
      ? i === 0
        ? "https://otieu.com/4/9674325"
        : i === 1
          ? "https://www.effectivegatecpm.com/xkht63dr?key=046ee4c3d3aa667e5afa96332e28f85c"
          : "https://viiukuhe.com/dc/?blockID=382513&tb=https%3A%2F%2Fotieu.com%2F"
      : null,
}))

export default function LinkTreePage() {
  const handleLinkClick = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(url, '_blank', 'noopener')
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start sm:justify-center p-3 sm:p-4 safe-area-inset">
      <div className="w-full max-w-sm">
        <div className="text-center mb-4 mt-6 sm:mt-0">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-2xl sm:text-3xl font-black leading-tight">Free Trading Signals</h1>
            <CheckCircle2 className="w-6 sm:w-7 h-6 sm:h-7 text-blue-500 flex-shrink-0" />
          </div>
          <p className="text-xs sm:text-sm text-gray-600">Welcome to free trading signals club</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-black my-5 sm:my-6" />

        <button
          onClick={handleLinkClick("https://one.exnessonelink.com/a/c_d797k8g5o6")}
          className="block w-full py-4 sm:py-3 px-3 sm:px-4 bg-blue-600 text-white font-semibold text-sm sm:text-base text-center rounded hover:bg-blue-700 active:bg-blue-800 transition-colors mb-5 sm:mb-4 border-none cursor-pointer"
        >
          Join Exness
        </button>

        <button
          onClick={handleLinkClick("https://www.100pipsclub.com/")}
          className="block w-full py-4 sm:py-3 px-3 sm:px-4 bg-blue-600 text-white font-semibold text-sm sm:text-base text-center rounded hover:bg-blue-700 active:bg-blue-800 transition-colors mb-5 sm:mb-4 border-none cursor-pointer"
        >
          Join 100 Pips Club
        </button>

        <h2 className="text-base sm:text-lg font-bold text-center mb-4">Offer Wall</h2>

        <div className="space-y-1.5 sm:space-y-2">
          {offers.map(
            (offer) =>
              offer.url && (
                <button
                  key={offer.id}
                  onClick={handleLinkClick(offer.url)}
                  className="block w-full py-3.5 sm:py-3 px-3 sm:px-4 bg-black text-white font-semibold text-sm sm:text-base text-center rounded hover:bg-gray-800 active:bg-gray-900 transition-colors border-none cursor-pointer"
                >
                  {offer.label}
                </button>
              ),
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-500 pb-6 sm:pb-0">
          <p>© 2025 Free Trading Signals. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
