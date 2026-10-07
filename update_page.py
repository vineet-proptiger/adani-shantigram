import re

with open('app/page.js', 'r') as f:
    content = f.read()

hero_section = """
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center">
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Welcome to Adani <br className="hidden sm:block" /> Shantigram Projects
            </h1>
            <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 bg-[#00a651] hover:bg-[#008f45] text-white px-6 py-3 rounded-lg text-lg font-bold transition-colors shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Right Content - Form Card */}
          <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Book Site Visit Now.</h3>
            <LeadForm formName="Home Page Banner Form" btnText="BOOK A SITE VISIT" />
          </div>
          
        </div>
      </section>

      {/* Projects Section */}
"""

# We need to inject imports at the top
imports = """import Link from 'next/link';
import Image from 'next/image';
import LeadForm from '../components/adani/LeadForm';
import { PHONE_NUMBER, PHONE_DISPLAY } from '../lib/config';

"""

content = re.sub(r"import Link from 'next/link';\nimport Image from 'next/image';\n", imports, content)

# We need to inject the hero section right inside <main> and before <div className="w-full max-w-7xl text-center mb-12">
# Let's adjust the <main> tag to have no padding on top so banner spans full width

content = content.replace(
    '<main className="min-h-screen bg-[#f8fafc] flex flex-col items-center py-12 px-4 sm:px-6 font-sans">',
    '<main className="min-h-screen bg-[#f8fafc] flex flex-col items-center font-sans pb-12">' + hero_section + '<div className="pt-16 w-full flex flex-col items-center px-4 sm:px-6">'
)

# Close the div at the very end
content = content.replace(
    '</main>',
    '</div>\n    </main>'
)

with open('app/page.js', 'w') as f:
    f.write(content)

