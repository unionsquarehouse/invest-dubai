'use client';

import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom styles for Swiper arrows and pagination
const swiperStyles = `
  .swiper {
    padding-bottom: 60px !important;
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 32px !important;
    height: 32px !important;
    background: white !important;
    border: 2px solid #9F3349 !important;
    border-radius: 50% !important;
    color: #9F3349 !important;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12) !important;
    top: auto !important;
    bottom: 14px !important;
    margin-top: 0 !important;
    transition: all 0.3s ease !important;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: #9F3349 !important;
    color: white !important;
    transform: scale(1.1) !important;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 12px !important;
    font-weight: 600 !important;
  }
  .swiper-button-prev {
    left: calc(50% - 100px) !important;
  }
  .swiper-button-next {
    right: calc(50% - 100px) !important;
  }
  .swiper-button-disabled {
    opacity: 0.5 !important;
    cursor: not-allowed !important;
  }
  .swiper-button-disabled:hover {
    background: white !important;
    color: #9F3349 !important;
    transform: none !important;
  }
  .swiper-pagination {
    bottom: 24px !important;
    position: absolute !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: auto !important;
    height: 8px !important;
    margin-top: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .swiper-pagination-bullet {
    width: 8px !important;
    height: 8px !important;
    background: #d1d5db !important;
    opacity: 1 !important;
    margin: 0 4px !important;
    transition: all 0.3s ease !important;
    display: inline-block !important;
  }
  .swiper-pagination-bullet-active {
    background: #9F3349 !important;
    transform: scale(1.3) !important;
  }
`;

const PROPERTY_DATA = [
  {
    city: 'Dubai',
    headerNote: 'UAE Property Investment With Tax Benefits',
    price: 438,
    currency: '$',
    isPrimary: true,
    features: [
      { name: 'AVG. PRICE PER SQ. FT.', value: '$438', type: 'price' },
      { name: 'RENTAL YIELD', value: 7, type: 'percent' },
      { name: 'CAPITAL APPRECIATION (5Y)', value: '+35 – 40%', type: 'text' },
      { name: 'SHORT–TERM RENTAL ROI', value: '8 – 12% ', type: 'text' },
      { name: 'RENTAL INCOME TAX', value: '0%', type: 'text' },
      { name: 'PROPERTY TAX', value: '0%', type: 'text' },
      { name: 'VISA WITH PROPERTY', value: true, type: 'boolean' },
      { name: 'FOREIGN OWNERSHIP', value: '100%', type: 'text' },
    ],
  },
  {
    city: 'London',
    headerNote: 'Premium UK Market With Established Regulations',
    price: 2816,
    currency: '$',
    isPrimary: false,
    features: [
      { name: 'AVG. PRICE PER SQ. FT.', value: '$1200', type: 'price' },
      { name: 'RENTAL YIELD', value: 3.15, type: 'percent' },
      { name: 'CAPITAL APPRECIATION (5Y)', value: '15 – 18%', type: 'text' },
      { name: 'SHORT–TERM RENTAL ROI', value: '3 – 5% ', type: 'text' },
      { name: 'RENTAL INCOME TAX', value: '20 - 45%', type: 'text' },
      { name: 'PROPERTY TAX', value: '0%', type: 'text' },
      { name: 'VISA WITH PROPERTY', value: false, type: 'boolean' },
      { name: 'FOREIGN OWNERSHIP', value: 'LIMITED LEASEHOLD', type: 'text' },
    ],
  },
  {
    city: 'New York',
    headerNote: 'High-Demand Market with Competitive Prices',
    price: 2816,
    currency: '$',
    isPrimary: false,
    features: [
      { name: 'AVG. PRICE PER SQ. FT.', value: '$1400', type: 'price' },
      { name: 'RENTAL YIELD', value: 3, type: 'percent' },
      { name: 'CAPITAL APPRECIATION (5Y)', value: '15 – 18%', type: 'text' },
      { name: 'SHORT–TERM RENTAL ROI', value: '3 – 5% ', type: 'text' },
      { name: 'RENTAL INCOME TAX', value: '30%', type: 'text' },
      { name: 'PROPERTY TAX', value: '~1% ANNUALLY', type: 'text' },
      { name: 'VISA WITH PROPERTY', value: false, type: 'boolean' },
      { name: 'FOREIGN OWNERSHIP', value: 'LIMITED LEASEHOLD', type: 'text' },
    ],
  },
  {
    city: 'Mumbai',
    headerNote: 'Established Indian Market With Strong Local Demand',
    price: 2816,
    currency: '$',
    isPrimary: false,
    features: [
      { name: 'AVG. PRICE PER SQ. FT.', value: '$570', type: 'price' },
      { name: 'RENTAL YIELD', value: 4, type: 'percent' },
      { name: 'CAPITAL APPRECIATION (5Y)', value: '13 – 14%', type: 'text' },
      { name: 'SHORT–TERM RENTAL ROI', value: '4% ', type: 'text' },
      { name: 'RENTAL INCOME TAX', value: '35%', type: 'text' },
      { name: 'PROPERTY TAX', value: '~5% ANNUALLY', type: 'text' },
      { name: 'VISA WITH PROPERTY', value: false, type: 'boolean' },
      { name: 'FOREIGN OWNERSHIP', value: 'LIMITED LEASEHOLD', type: 'text' },
    ],
  },
];

const FeatureValue = ({ feature }) => {
  switch (feature.type) {
    case 'price':
      return (
        <span className="text-sm">
          {feature.value.split(' ')[0]}
        </span>
      );
    case 'percent':
      return (
        <div className="flex items-center justify-center font-sans">
          <CountUp
            end={feature.value}
            duration={2}
            className="text-sm"
            suffix="%"
          />
        </div>
      );
    case 'boolean':
      return feature.value ? (
        <FaCheckCircle className="text-green-600 mx-auto text-2xl" />
      ) : (
        <FaTimesCircle className="text-[#9F3349] mx-auto text-2xl" />
      );
    default:
      return <span className=" text-sm font-sans">{feature.value}</span>;
  }
};

export default function PropertyComparison() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-white py-10 xl:py-32  font-sans">
      <style>{swiperStyles}</style>
      <div className="w-[93vw] xl:w-[80vw] mx-auto">
        <h2 className="text-center text-4xl sm:text-6xl font-['Playfair_Display'] mb-14 text-gray-800">
          Property Investment Comparison
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              enabled: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={false}
            breakpoints={{
              // Show 2 slides on screens >= 640px (sm)
              640: {
                slidesPerView: 2,
              },
              // Show 3 slides on screens >= 1024px (lg)
              1024: {
                slidesPerView: 3,
              },
              // Show 4 slides on screens >= 1536px (2xl)
              1536: {
                slidesPerView: 4,
              },
            }}
          >
          {PROPERTY_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`group relative rounded-xl px-6 py-10 transition-all duration-500 ease-in-out cursor-pointer h-full flex flex-col justify-between 
                  ${item.isPrimary ? 'bg-black text-white shadow-2xl' : 'bg-gray-50 hover:bg-gray-100 hover:shadow-lg'}
                  ${hoveredCard === index ? 'shadow-2xl scale-105 z-10' : 'shadow-md'}
                `}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div>
                  <div
                    className={`text-3xl font-bold mb-1 transition-colors duration-300 ease-in-out ${
                      item.isPrimary ? 'text-white' : 'text-[#9F3349]'
                    }`}
                  >
                    {item.city}
                  </div>
                  <div
                    className={`text-sm mb-6 transition-colors duration-300 ease-in-out ${
                      item.isPrimary ? 'text-gray-200' : 'text-gray-500'
                    }`}
                  >
                    {item.headerNote}
                  </div>

                  <div className="space-y-6">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-between"
                      >
                        <div
                          className={`text-sm font-medium transition-colors duration-300 ease-in-out ${
                            item.isPrimary ? 'text-gray-200' : 'text-gray-600'
                          }`}
                        >
                          {feature.name}
                        </div>
                        <div
                          className={`text-right ${
                            item.isPrimary ? 'text-white' : 'text-gray-800'
                          }`}
                        >
                          <FeatureValue feature={feature} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                  className={`mt-8 self-start flex items-center gap-2 font-semibold text-sm transition-colors duration-300 ease-in-out
                    ${
                      item.isPrimary
                        ? 'text-white hover:text-gray-200'
                        : 'text-black hover:text-blue-800'
                    }
                  `}
                >
                  Learn More
                  <BsArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}