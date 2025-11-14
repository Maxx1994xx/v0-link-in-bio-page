import { NextRequest, NextResponse } from 'next/server'
import { parseStringPromise } from 'xml2js'

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams.get('url')
    
    if (!url) {
      return NextResponse.json({ error: 'No URL provided' }, { status: 400 })
    }

    // Fetch XML from BidVertiser
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch ads' }, { status: response.status })
    }

    const xmlText = await response.text()
    
    // Parse XML to JSON
    const parsedData = await parseStringPromise(xmlText)
    
    // Extract ads from XML structure
    const ads = parsedData?.root?.ad?.map((ad: any) => ({
      title: ad.title?.[0] || 'Offer',
      description: ad.desc?.[0] || '',
      click_url: ad.click_url?.[0] || '#',
      image_url: ad.image_url?.[0] || '',
    })) || []

    return NextResponse.json({ ads })
  } catch (error) {
    console.error('[v0] BidVertiser API error:', error)
    return NextResponse.json({ error: 'Internal server error', ads: [] }, { status: 500 })
  }
}
