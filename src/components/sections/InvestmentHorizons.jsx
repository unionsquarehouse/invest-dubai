'use client';

import Image from 'next/image';

const InvestmentHorizons = () => {
  return (
    <section className=" w-[92vw] xl:w-[80vw] mx-auto">
      <h2 className="text-[34px] md:text-5xl leading-tight tracking-[0.02em] font-['Playfair_Display']  text-center mb-6 md:mb-8 uppercase">
        INVESTMENT HORIZONS
      </h2>

      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <Image
          src="/images/investment-bg.jpg" /* put file in /public/images */
          alt="Investment Property"
          width={1600}
          height={800}
          priority
          className="w-full h-[80vh] object-cover"
        />

        {/* Bottom-to-top dark gradient to match screenshot */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10  ">
          {/* Top red stats (left, center, right) */}
          <div className="w-full flex items-end justify-between mb-6 md:mb-10 md:w-[92%] lg:w-[88%] mx-auto">
            <div className="text-left drop-shadow">
              <p className="text-white text-2xl md:text-4xl font-extrabold leading-none">$438</p>
              <p className="text-white text-xs md:text-base  mt-1">Per Sq.Ft</p>
            </div>

            <div className="text-center drop-shadow">
              <p className="text-white text-2xl md:text-4xl font-extrabold leading-none">$204k</p>
              <p className="text-white text-xs md:text-base  mt-1">Starting Price</p>
            </div>

            <div className="text-right drop-shadow">
              <p className="text-white text-2xl md:text-4xl font-extrabold leading-none">Flexible</p>
              <p className="text-white text-xs md:text-base  mt-1">Payment Plans</p>
            </div>
          </div>

          {/* Bottom rounded pill with items + dividers */}
          <div className="w-full flex justify-center">
            <div className="w-full md:w-[92%] lg:w-[88%] bg-white/10 backdrop-blur-sm text-white border border-white/25 rounded-lg px-3 py-2 md:px-6 md:py-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-center text-[12px] md:text-base">
                {[
                  'Prime Locations',
                  'Guaranteed ROI',
                  'Luxury Amenities',
                  'Property Management',
                ].map((item, i, arr) => (
                  <div
                    key={item}
                    className={[
                      'px-2 md:px-4',
                      i !== arr.length - 1 ? 'border-r border-white/30' : '',
                    ].join(' ')}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentHorizons;
