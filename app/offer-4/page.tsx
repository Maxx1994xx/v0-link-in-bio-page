'use client'

import { CheckCircle2 } from 'lucide-react'
import Link from "next/link"
import { useEffect } from 'react'

export default function Offer4Page() {
  useEffect(() => {
    const bidvertiserUrl = `http://2102650.bdv.bidvertiser.com/BidVertiser.dbm?pid=940536&bid=2102650&xml=1&czero=-1&dlt=0&maxcount=1&ownid=default&Kterm=trading&cip=&bvref=${encodeURIComponent(window.location.href)}&u_agnt=${encodeURIComponent(navigator.userAgent)}&bvlang=${navigator.language}`
    window.location.href = bidvertiserUrl
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <p className="text-gray-600">Redirecting...</p>
    </div>
  )
}
