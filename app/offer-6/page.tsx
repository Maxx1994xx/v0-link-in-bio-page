'use client'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Offer6Page() {
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
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start p-3 sm:p-4">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center gap-1 text-sm text-gray-600 hover:text-black mb-6 mt-4">
          <ChevronLeft className="w-4 h-4" />
          Back
        </Link>

        <h1 className="text-2xl sm:text-3xl font-black text-center mb-6">Offer 6</h1>

        <div className="my-6 flex justify-center">
          <div id="container-928f1bf7996b81188f31efac647ef4de"></div>
        </div>

        <div className="my-6 flex justify-center">
          <div id="container-27cc1a9d5664a7106fe4a351e661f8da"></div>
        </div>
      </div>
    </div>
  )
}
