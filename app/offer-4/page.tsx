'use client'

import { CheckCircle2 } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from 'react'

export default function Offer4Page() {
  const [ads, setAds] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBidVertiserAds = async () => {
      try {
        const bidvertiserUrl = new URL('http://2102650.bdv.bidvertiser.com/BidVertiser.dbm')
        bidvertiserUrl.searchParams.append('pid', '940536')
        bidvertiserUrl.searchParams.append('bid', '2102650')
        bidvertiserUrl.searchParams.append('xml', '1')
        bidvertiserUrl.searchParams.append('czero', '-1')
        bidvertiserUrl.searchParams.append('dlt', '0')
        bidvertiserUrl.searchParams.append('maxcount', '10')
        bidvertiserUrl.searchParams.append('ownid', 'default')
        bidvertiserUrl.searchParams.append('Kterm', 'trading')
        bidvertiserUrl.searchParams.append('cip', '')
        bidvertiserUrl.searchParams.append('bvref', window.location.href)
        bidvertiserUrl.searchParams.append('u_agnt', navigator.userAgent)
        bidvertiserUrl.searchParams.append('bvlang', navigator.language)

        const response = await fetch(`/api/bidvertiser?url=${encodeURIComponent(bidvertiserUrl.toString())}`)
        const data = await response.json()
        
        if (data.ads) {
          setAds(data.ads)
        }
      } catch (error) {
        console.log('[v0] Error fetching BidVertiser ads:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBidVertiserAds()
  }, [])

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start sm:justify-center p-3 sm:p-4 safe-area-inset">
      <div className="w-full max-w-sm">
        <div className="text-center mb-4 mt-6 sm:mt-0">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-2xl sm:text-3xl font-black leading-tight">Offer 4</h1>
            <CheckCircle2 className="w-6 sm:w-7 h-6 sm:h-7 text-blue-500 flex-shrink-0" />
          </div>
          <p className="text-xs sm:text-sm text-gray-600">Exclusive Offer 4 Details</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-black my-5 sm:my-6" />

        <div className="space-y-3">
          <p className="text-sm sm:text-base text-gray-700">
            This is your Offer 4 page. Featured offers below:
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {loading && <p className="text-xs text-gray-500 text-center">Loading offers...</p>}
          
          {!loading && ads.length > 0 ? (
            ads.map((ad, idx) => (
              <a
                key={idx}
                href={ad.click_url}
                target="_blank"
                rel="noopener"
                className="block p-3 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
              >
                <p className="font-semibold text-sm text-black">{ad.title}</p>
                <p className="text-xs text-gray-600 mt-1">{ad.description}</p>
              </a>
            ))
          ) : (
            !loading && <p className="text-xs text-gray-500 text-center">No offers available at the moment.</p>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <Link
            href="/"
            className="block w-full py-3 px-4 bg-black text-white font-semibold text-sm sm:text-base text-center rounded hover:bg-gray-800 active:bg-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-500 pb-6 sm:pb-0">
          <p>© 2025 Free Trading Signals. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
