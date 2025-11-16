import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { name: 'AtomicHub', href: 'https://wax.atomichub.io/explorer/collection/futuresrelic', label: 'ah' },
    { name: 'Telegram', href: 'https://t.me/futuresrelic', label: 'te' },
    { name: 'Facebook', href: 'https://www.facebook.com/FuturesRelic', label: 'fb' },
    { name: 'Twitter', href: 'https://twitter.com/FuturesRelic', label: 'tw' },
    { name: 'Instagram', href: 'https://www.instagram.com/futuresrelic/', label: 'in' },
    { name: 'Discord', href: 'https://discord.gg/EAgsTRhZpA', label: 'di' },
  ]

  const sitemapLinks = [
    { name: 'A Curious Traveller', href: '#curious' },
    { name: 'Internship', href: '#internship' },
    { name: 'Stack your Documents', href: '#stack' },
    { name: 'Recycling Plan', href: '#recycle' },
    { name: 'Wax Seals', href: '#waxseals' },
    { name: 'Intern Tasks', href: '#interntasks' },
    { name: 'Canisters', href: '#canisters' },
    { name: 'A Look at the Collection', href: '#collection' },
    { name: 'Slide Blendings', href: '#slide' },
    { name: 'Read our Whitepaper', href: '#whitepaper' },
    { name: 'An NFT Filmmaking Experience', href: '#filmmaking' },
    { name: "Future's Relic", href: '#futuresrelic' },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Primary Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Future's Relic
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label={link.name}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Sitemap */}
          <div className="space-y-2">
            <details className="group">
              <summary className="cursor-pointer text-gray-300 hover:text-white list-none flex items-center justify-center gap-2">
                <span>Sitemap</span>
                <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 space-y-2 text-sm">
                {sitemapLinks.slice(0, 6).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/whitepaper.pdf" className="block text-gray-400 hover:text-accent transition-colors">
                  Whitepaper
                </Link>
                <Link href="/faq" className="block text-gray-400 hover:text-accent transition-colors" target="_blank">
                  FAQ
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-accent transition-colors" target="_blank">
                  Imprint
                </Link>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-dark border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            Copyright © 2024 Future's Relic | Powered by Future's Relic
          </p>
        </div>
      </div>
    </footer>
  )
}
