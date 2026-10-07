import re

with open('app/page.js', 'r') as f:
    content = f.read()

footer = """
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
"""

content = content.replace('      </div>\n    </div>', footer)

with open('app/page.js', 'w') as f:
    f.write(content)
