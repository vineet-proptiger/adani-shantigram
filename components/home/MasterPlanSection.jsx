'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function MasterPlanSection({ setIsOpen }) {
  const [activeTab, setActiveTab] = useState('master');

  return (
    <section 
      id="masterplan" 
      className="w-full py-16 sm:py-20 md:py-24 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#00a4e4] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-2 block">
            MASTER PLAN &amp; FLOOR PLANS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 m-0 leading-tight tracking-tight">
            Planned Around Light &amp; Views
          </h2>
        </div>

        {/* Interactive Switch Buttons */}
        <div className="flex items-center justify-center mb-10 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200/80 shadow-inner max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab('master')}
              className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === 'master'
                  ? 'bg-[#00a4e4] text-white shadow-md shadow-[#00a4e4]/30'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <i className="fa-solid fa-map-location-dot text-xs" />
              <span>Master Plan</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('floor')}
              className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === 'floor'
                  ? 'bg-[#00a4e4] text-white shadow-md shadow-[#00a4e4]/30'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <i className="fa-solid fa-layer-group text-xs" />
              <span>Floor Plans</span>
            </button>
          </div>
        </div>

        {/* ── TAB CONTENT: MASTER PLAN ── */}
        {activeTab === 'master' && (
          <div className="max-w-4xl mx-auto">
            <div
              className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-50 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/adani/masterplan/masterplan.webp"
                  alt="Adani Shantigram Township Master Plan"
                  fill
                  className="object-contain filter blur-[5px] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
                
                {/* Overlay with Lock and Unlock CTA */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex flex-col items-center justify-center gap-2.5 sm:gap-3 transition-colors group-hover:bg-black/40 px-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#00a4e4] flex items-center justify-center text-base sm:text-lg shadow-xl">
                    <i className="fa-solid fa-lock" />
                  </div>
                  <span className="bg-white text-slate-900 px-4 sm:px-7 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-sm font-bold shadow-xl flex items-center gap-2 group-hover:bg-[#00a4e4] group-hover:text-white transition-all duration-200 max-w-[94%] text-center">
                    <i className="fa-solid fa-file-arrow-down text-[#00a4e4] group-hover:text-white shrink-0" />
                    <span>Click to Unlock High-Res Master Plan</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB CONTENT: FLOOR PLANS (1 line me 4 cards on desktop) ── */}
        {activeTab === 'floor' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto">
            
            {/* 3 BHK Card */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/80 cursor-pointer hover:shadow-xl hover:border-[#00a4e4]/50 transition-all duration-300 group flex flex-col justify-between"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 p-5 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                <Image
                  src="/images/adani/masterplan/2bhk.webp"
                  alt="3 BHK Floor Plan"
                  fill
                  className="object-contain filter blur-[5px] transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center gap-2 transition-colors group-hover:bg-black/35">
                  <div className="w-9 h-9 rounded-full bg-white text-[#00a4e4] flex items-center justify-center text-sm shadow-md">
                    <i className="fa-solid fa-lock" />
                  </div>
                  <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 group-hover:bg-[#00a4e4] group-hover:text-white transition-colors">
                    <i className="fa-solid fa-eye text-[#00a4e4] group-hover:text-white" />
                    Unlock Floor Plan
                  </span>
                </div>
              </div>
              <div className="py-4 px-4 text-center">
                <h4 className="text-slate-900 font-extrabold text-base sm:text-lg m-0">
                  3 BHK
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1 m-0">
                  Size: On Request
                </p>
              </div>
            </div>

            {/* 4 BHK Card */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/80 cursor-pointer hover:shadow-xl hover:border-[#00a4e4]/50 transition-all duration-300 group flex flex-col justify-between"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 p-5 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                <Image
                  src="/images/adani/masterplan/3bhk.webp"
                  alt="4 BHK Floor Plan"
                  fill
                  className="object-contain filter blur-[5px] transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center gap-2 transition-colors group-hover:bg-black/35">
                  <div className="w-9 h-9 rounded-full bg-white text-[#00a4e4] flex items-center justify-center text-sm shadow-md">
                    <i className="fa-solid fa-lock" />
                  </div>
                  <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 group-hover:bg-[#00a4e4] group-hover:text-white transition-colors">
                    <i className="fa-solid fa-eye text-[#00a4e4] group-hover:text-white" />
                    Unlock Floor Plan
                  </span>
                </div>
              </div>
              <div className="py-4 px-4 text-center">
                <h4 className="text-slate-900 font-extrabold text-base sm:text-lg m-0">
                  4 BHK
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1 m-0">
                  Size: On Request
                </p>
              </div>
            </div>

            {/* 5 BHK Card */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/80 cursor-pointer hover:shadow-xl hover:border-[#00a4e4]/50 transition-all duration-300 group flex flex-col justify-between"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 p-5 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                <Image
                  src="/images/adani/masterplan/3bhk.webp"
                  alt="5 BHK Floor Plan"
                  fill
                  className="object-contain filter blur-[5px] transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center gap-2 transition-colors group-hover:bg-black/35">
                  <div className="w-9 h-9 rounded-full bg-white text-[#00a4e4] flex items-center justify-center text-sm shadow-md">
                    <i className="fa-solid fa-lock" />
                  </div>
                  <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 group-hover:bg-[#00a4e4] group-hover:text-white transition-colors">
                    <i className="fa-solid fa-eye text-[#00a4e4] group-hover:text-white" />
                    Unlock Floor Plan
                  </span>
                </div>
              </div>
              <div className="py-4 px-4 text-center">
                <h4 className="text-slate-900 font-extrabold text-base sm:text-lg m-0">
                  5 BHK
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1 m-0">
                  Size: On Request
                </p>
              </div>
            </div>

            {/* 6 BHK Card */}
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/80 cursor-pointer hover:shadow-xl hover:border-[#00a4e4]/50 transition-all duration-300 group flex flex-col justify-between"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 p-5 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                <Image
                  src="/images/adani/masterplan/2bhk.webp"
                  alt="6 BHK Floor Plan"
                  fill
                  className="object-contain filter blur-[5px] transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center gap-2 transition-colors group-hover:bg-black/35">
                  <div className="w-9 h-9 rounded-full bg-white text-[#00a4e4] flex items-center justify-center text-sm shadow-md">
                    <i className="fa-solid fa-lock" />
                  </div>
                  <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 group-hover:bg-[#00a4e4] group-hover:text-white transition-colors">
                    <i className="fa-solid fa-eye text-[#00a4e4] group-hover:text-white" />
                    Unlock Floor Plan
                  </span>
                </div>
              </div>
              <div className="py-4 px-4 text-center">
                <h4 className="text-slate-900 font-extrabold text-base sm:text-lg m-0">
                  6 BHK
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1 m-0">
                  Size: On Request
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
