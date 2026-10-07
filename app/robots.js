import { SITE_URL } from '../lib/config'

export default function robots() {
  const baseUrl = SITE_URL || 'https://adanisantigramtownship.com'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
