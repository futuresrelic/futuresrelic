'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const socialLinks = [
    { name: 'AtomicHub', href: 'https://wax.atomichub.io/explorer/collection/futuresrelic', icon: '/images/ah_ico_28_w.png' },
    { name: 'Telegram', href: 'https://t.me/futuresrelic', icon: '/images/tg_ico_28_w.png' },
    { name: 'Facebook', href: 'https://www.facebook.com/FuturesRelic', icon: '/images/fb_ico_28_w.png' },
    { name: 'Twitter', href: 'https://twitter.com/FuturesRelic', icon: '/images/tw_ico_28.png' },
    { name: 'Instagram', href: 'https://www.instagram.com/futuresrelic/', icon: '/images/in_ico_28.png' },
    { name: 'Discord', href: 'https://discord.gg/EAgsTRhZpA', icon: '/images/dc_ico_28_w.png' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-dark border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/images/fr-logo-white.png" alt="Future's Relic" className="h-12" />
            </Link>
          </div>

          {/* Center - Services Menu (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/faq"
              className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
              target="_blank"
            >
              <span className="text-2xl">❓</span>
              <span className="sr-only">FAQ</span>
            </Link>
            <Link
              href="/whitepaper.pdf"
              className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
            >
              <span className="text-2xl">📄</span>
              <span>Whitepaper</span>
            </Link>
          </nav>

          {/* Right - Social Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label={link.name}
              >
                <span className="w-7 h-7 inline-block">{link.name.charAt(0)}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!mobileMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              FAQ
            </Link>
            <Link
              href="/whitepaper.pdf"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Whitepaper
            </Link>
            <div className="flex flex-wrap gap-4 px-3 py-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
