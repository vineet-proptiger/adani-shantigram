'use client';

import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '../components/adani/LeadForm';
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_NUMBER } from '../lib/config';


const projects = [
  {
    id: 1,
    title: 'Adani Amora',
    slug: 'adani-amora',
    location: 'Shantigram - AHMEDABAD',
    type: '3 BHK',
    landArea: '1 Acres',
    size: '1967 - 2054 Sqft',
    totalUnits: '90',
    possession: '2029',
    rera: 'MAA16481/190226/301129',
    price: '1.4 Cr',
    status: 'NEW LAUNCH',
    image: '/home/banner1.webp'
  },
  {
    id: 2,
    title: 'Adani Belrosa',
    slug: 'adani-belrosa',
    location: 'Shantigram - AHMEDABAD',
    type: '4 BHK, 5 BHK, 6 BHK',
    landArea: '1.82 Acres',
    size: '5450 - 12800 Sqft',
    totalUnits: '108',
    possession: '2030',
    rera: 'PR/GJ/GANDHINAGAR/GANDHINAGAR/Ahmedabad Urban Development Authority/RAA15538/180725/310530',
    price: '5.38 Cr',
    status: 'UNDER CONSTRUCTION',
    image: '/home/banner2.webp'
  },
  {
    id: 3,
    title: 'Adani Embrace',
    slug: 'adani-embrace',
    location: 'Shantigram - AHMEDABAD',
    type: '3 BHK',
    landArea: '5 Towers (14 Floors)',
    size: '1966 - 2164 Sqft',
    totalUnits: '280 Units',
    possession: 'Dec 2026',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA12526/251023',
    price: '1.36 Cr',
    status: 'UNDER CONSTRUCTION',
    image: '/home/banner3.webp'
  },
  {
    id: 4,
    title: 'Adani Ambrosia',
    slug: 'adani-ambrosia',
    location: 'Shantigram - AHMEDABAD',
    type: '4 BHK',
    landArea: '2.45 Acres',
    size: '3211 - 3707 Sqft',
    totalUnits: '156',
    possession: '2026',
    rera: 'PR/GJ/GANDHINAGAR/GANDHINAGAR/AUDA/RAA10833/201022',
    price: '2.45 Cr',
    status: 'UNDER CONSTRUCTION',
    image: '/home/banner4.webp'
  },
  /*
  {
    id: 5,
    title: 'Adani Augusta',
    slug: 'adani-augusta',
    location: 'Tragad - AHMEDABAD',
    type: '3 BHK',
    landArea: '0.81 Acres',
    size: '1382 - 1382 Sqft',
    totalUnits: '80',
    possession: '2026',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA12662/161123',
    price: '1.3 Cr',
    status: 'UNDER CONSTRUCTION',
    image: '/home/banner5.webp'
  },
  */
  /*
  {
    id: 6,
    title: 'Shivalik Greenfield',
    slug: 'shivalik-greenfield',
    location: 'Shantigram - AHMEDABAD',
    type: '3 BHK, 4 BHK',
    landArea: '2.14 Acres',
    size: '2653 - 4548 Sqft',
    totalUnits: '240',
    possession: '2028',
    rera: 'RAA14879',
    price: '1.83 Cr',
    status: 'NEW LAUNCH',
    image: '/home/banner6.webp'
  },
  */
  /*
  {
    id: 7,
    title: 'Shilp Skyline',
    slug: 'shilp-skyline',
    location: 'Shantigram - AHMEDABAD',
    type: '4 BHK',
    landArea: '2.5 Acres',
    size: '3071 - 3071 Sqft',
    totalUnits: '256',
    possession: '2027',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedaba...',
    price: '2.28 Cr',
    status: 'NEW LAUNCH',
    image: '/home/banner7.webp'
  },
  */
  /*
  {
    id: 8,
    title: 'Adani Amaris',
    slug: 'adani-amaris',
    location: 'Gota - AHMEDABAD',
    type: '4 BHK, 5 BHK',
    landArea: '3.94 Acres',
    size: '2026 - 4292 Sqft',
    totalUnits: '192',
    possession: '2028',
    rera: 'PR/GJ/AHMEDABAD/AHMEDABAD CITY/Ahmedabad Municipal Corporation/RAA15836/150925/310729',
    price: '2.67 Cr',
    status: 'UNDER CONSTRUCTION',
    image: '/home/banner8.webp'
  }
  */
];

export default function MainHome() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="top" className="relative min-h-screen bg-[#f8fafc] flex flex-col items-center font-sans pb-12">
      {/* Top Header - Sticky on small devices, floating badge on desktop */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center md:justify-start sm:absolute sm:top-0 sm:left-0 sm:w-full sm:z-20 sm:p-8 lg:px-12 pointer-events-none">
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top"
          className="w-full sm:w-auto bg-white sm:rounded-2xl shadow-md sm:shadow-[0_8px_30px_rgba(0,0,0,0.2)] py-3 sm:p-4 flex items-center justify-center sm:inline-flex border-b border-gray-200 sm:border-white/50 cursor-pointer transition-all active:opacity-90 pointer-events-auto"
        >
          <img src="/home/logo.webp" alt="Adani Logo" className="h-9 sm:h-10 lg:h-12 object-contain mix-blend-multiply" />
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center pt-24 pb-16 md:py-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home/home.webp"
            alt="Adani Shantigram Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 mt-8 md:mt-0">
          
          {/* Left Content */}
          <div className="text-left max-w-2xl">
            <h1 className="text-[34px] sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] sm:leading-tight mb-6 drop-shadow-lg">
              Welcome to Adani <br /> Shantigram Projects
            </h1>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
              <a href={`tel:${PHONE_NUMBER}`} className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-[#00a4e4] hover:bg-[#008fce] text-white px-2 sm:px-6 py-3 rounded-lg text-[15px] sm:text-lg font-bold transition-colors shadow-lg whitespace-nowrap">
                <i className="fa-solid fa-phone-volume text-sm sm:text-lg shrink-0"></i>
                {PHONE_DISPLAY}
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20am%20interested%20in%20Adani%20Shantigram%20Projects.`} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-2 sm:px-6 py-3 rounded-lg text-[15px] sm:text-lg font-bold transition-colors shadow-lg whitespace-nowrap">
                <i className="fa-brands fa-whatsapp text-lg sm:text-xl shrink-0"></i>
                +91 9560582493
              </a>
            </div>
          </div>

          {/* Right Content - Form Card */}
          <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Book Site Visit Now.</h3>
            <LeadForm formName="Home Page Banner Form" btnText="BOOK A SITE VISIT" theme="light" />
          </div>
          
        </div>
      </section>

      {/* Projects Section */}
      <div className="pt-12 sm:pt-16 w-full flex flex-col items-center px-4 sm:px-6">
        <div className="w-full max-w-7xl text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-3">
            Exclusive Premium Projects
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Explore handpicked ultra-luxury residences designed for the Good Life.
          </p>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project) => (
          <Link href={`/${project.slug}`} key={project.id} className="group flex flex-col h-full bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all duration-300 border border-slate-100 hover:-translate-y-1">
            
            {/* Image Container */}
            <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider text-white shadow-md ${
                  project.status === 'NEW LAUNCH' ? 'bg-[#5c2483]/90' : 'bg-[#0f172a]/80'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#00a4e4] transition-colors">
                {project.title}
              </h2>
              <p className="text-slate-500 text-sm font-medium mb-5 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#d31168]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {project.location}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm mb-4 border-y border-slate-100 py-4">
                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Type</p>
                  <p className="text-slate-800 font-medium truncate">{project.type}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Land Area</p>
                  <p className="text-slate-800 font-medium">{project.landArea}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Units</p>
                  <p className="text-slate-800 font-medium">{project.totalUnits}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Possession</p>
                  <p className="text-slate-800 font-medium">{project.possession}</p>
                </div>
              </div>

              {/* RERA Number */}
              {project.rera && (
                <div className="mb-5 bg-slate-50 border border-slate-100 rounded-lg p-2.5">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">RERA Number</p>
                  <p className="text-slate-700 font-mono text-[11px] leading-relaxed break-all font-medium">
                    {project.rera}
                  </p>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between pt-1 mt-auto">
                <div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">Starting From</p>
                  <p className="text-[#00a4e4] text-xl font-bold">₹ {project.price}</p>
                </div>
                <div className="bg-[#1e293b] group-hover:bg-[#5c2483] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm">
                  Explore
                </div>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
    
    <footer className="w-full bg-white border-t border-slate-200 mt-16 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 font-sans">
          About Adani Realty
        </h2>
        <div className="text-slate-600 text-[15px] leading-[1.8] font-normal space-y-6 text-justify">
          <p>
            Adani Realty is the real estate arm of one of India's leading infrastructure and development entities – Adani Group. With resolute commitments to 'Nation Building' and 'Growth with Goodness', we are developing real estate projects in the most promising destinations, integrating design aesthetics with cutting-edge construction technology. We have developed close to 33 Mn. Sq. Ft. and approximately 144 Mn. Sq. Ft. of real estate space is under development, including residential, commercial, and social club projects across Ahmedabad, Mumbai, Pune and Gurugram.
          </p>
          <p>
            Within a decade, Adani Realty has achieved exponential growth in the residential and commercial sectors. We have helped numerous families find their dream houses where they are happily residing. We have also created state-of-the-art commercial spaces with futuristic setups for companies to work, feel empowered and flourish. We have some of the most sought-after award-winning commercial and retail spaces which promise craftsmanship and superior design by Adani Realty.
          </p>
        </div>
      </div>
    </footer>

    </main>
  );
}
