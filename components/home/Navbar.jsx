'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PHONE_NUMBER, PHONE_DISPLAY } from '../../lib/config';

export default function HomeNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'OVERVIEW', href: '#overview' },
    { name: 'OUR PROJECTS', href: '#projects' },
    { name: 'MASTER & FLOOR PLAN', href: '#masterplan' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left Corner Logo */}
            <Link href="#top" className="flex items-center shrink-0 py-2">
              <img
                src="/home/logo.webp"
                alt="Adani Realty"
                className="h-9 sm:h-12 w-auto object-contain mix-blend-multiply"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-bold tracking-wider text-slate-700 hover:text-[#00a4e4] uppercase transition-colors duration-200 py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Button - Call Now */}
            <div className="hidden sm:flex items-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center gap-2.5 bg-[#00a4e4] hover:bg-[#008fce] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-[15px] font-bold tracking-wide transition-all shadow-md shadow-[#00a4e4]/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] whitespace-nowrap"
              >
                <i className="fa-solid fa-phone-volume text-base sm:text-lg shrink-0"></i>
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#00a4e4] hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-bold text-slate-700 hover:text-[#00a4e4] hover:bg-slate-50 uppercase tracking-wider transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2.5 w-full bg-[#00a4e4] hover:bg-[#008fce] text-white py-3.5 rounded-xl text-[15px] font-bold tracking-wide shadow-md"
              >
                <i className="fa-solid fa-phone-volume text-base"></i>
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer so content does not hide behind fixed header */}
      <div className="h-16 sm:h-20 w-full shrink-0" aria-hidden="true" />
    </>
  );
}
