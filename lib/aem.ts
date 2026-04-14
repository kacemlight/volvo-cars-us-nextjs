// AEM Content Fragment API integration — READY TO ACTIVATE
// Currently disabled: AEM API access pending (403 Forbidden on OAuth token)
// To enable: set USE_AEM=true in .env.local and provide valid AEM_HOST + AEM_TOKEN
//
// Usage: Replace imports in lib/content.ts with these functions when ready

const AEM_HOST = process.env.AEM_HOST || ''
const AEM_TOKEN = process.env.AEM_TOKEN || ''
const USE_AEM = process.env.USE_AEM === 'true'

/**
 * Fetch a content fragment from AEM API
 * @param path - The content fragment path (e.g., "volvo-us/hero-section")
 * @returns JSON content fragment data
 */
export async function fetchContentFragment(path: string) {
  if (!USE_AEM) {
    console.log('[AEM] USE_AEM is false, returning null. Switch to AEM with USE_AEM=true')
    return null
  }

  try {
    const url = `${AEM_HOST}/adobe/sites/cf/fragments/${path}`
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${AEM_TOKEN}` },
    })

    if (!res.ok) {
      console.error(`[AEM] Fetch failed: ${res.status} ${res.statusText}`)
      throw new Error(`AEM fetch failed: ${res.status}`)
    }

    return res.json()
  } catch (error) {
    console.error('[AEM] Error fetching fragment:', error)
    return null
  }
}