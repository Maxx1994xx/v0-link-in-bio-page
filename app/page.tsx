'use client'

import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

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
  isPage: i >= 3, // offers 4-10 are now separate pages
}))

export default function LinkTreePage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//pl28061922.effectivegatecpm.com/27cc1a9d5664a7106fe4a351e661f8da/invoke.js'
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    document.body.appendChild(script)
  }, [])

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      window.atOptions = {
        'key' : '928f1bf7996b81188f31efac647ef4de',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `
    document.head.appendChild(script)

    const script2 = document.createElement('script')
    script2.type = 'text/javascript'
    script2.src = '//www.highperformanceformat.com/928f1bf7996b81188f31efac647ef4de/invoke.js'
    script2.async = true
    document.head.appendChild(script2)
  }, [])

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

        <div className="my-4 flex justify-center">
          <div id="container-928f1bf7996b81188f31efac647ef4de"></div>
        </div>

        <a
          href="https://one.exnessonelink.com/a/c_d797k8g5o6"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 sm:py-3 px-3 sm:px-4 bg-blue-600 text-white font-semibold text-sm sm:text-base text-center rounded hover:bg-blue-700 active:bg-blue-800 transition-colors mb-5 sm:mb-4"
        >
          Join Exness
        </a>

        <a
          href="https://www.100pipsclub.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 sm:py-3 px-3 sm:px-4 bg-blue-600 text-white font-semibold text-sm sm:text-base text-center rounded hover:bg-blue-700 active:bg-blue-800 transition-colors mb-5 sm:mb-4"
        >
          Join 100 Pips Club
        </a>

        <h2 className="text-base sm:text-lg font-bold text-center mb-4">Offer Wall</h2>

        <div className="space-y-1.5 sm:space-y-2">
          {offers.map(
            (offer) =>
              offer.url || offer.isPage ? (
                offer.isPage ? (
                  <Link
                    key={offer.id}
                    href={`/offer-${offer.id}`}
                    className="block w-full py-3.5 sm:py-3 px-3 sm:px-4 bg-black text-white font-semibold text-sm sm:text-base text-center rounded hover:bg-gray-800 active:bg-gray-900 transition-colors"
                  >
                    {offer.label}
                  </Link>
                ) : (
                  <a
                    key={offer.id}
                    href={offer.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block w-full py-3.5 sm:py-3 px-3 sm:px-4 bg-black text-white font-semibold text-sm sm:text-base text-center rounded hover:bg-gray-800 active:bg-gray-900 transition-colors"
                  >
                    {offer.label}
                  </a>
                )
              ) : null,
          )}
        </div>

        {/* Adsterra native banner */}
        <div className="my-6 flex justify-center">
          <div id="container-27cc1a9d5664a7106fe4a351e661f8da"></div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-500 pb-6 sm:pb-0">
          <p>© 2025 Free Trading Signals. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
