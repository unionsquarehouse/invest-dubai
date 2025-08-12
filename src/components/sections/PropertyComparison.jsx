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
  .swiper-button-next,
  .swiper-button-prev {
    color: #9F3349 !important;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.5rem !important;
  }
  .swiper-pagination-bullet {
    background: #9F3349 !important;
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
        <span className="font-bold text-lg">
          {feature.value.split(' ')[0]}
        </span>
      );
    case 'percent':
      return (
        <div className="flex items-center justify-center">
          <CountUp
            end={feature.value}
            duration={2}
            className="font-bold text-xl"
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
      return <span className="font-medium text-sm">{feature.value}</span>;
  }
};

export default function PropertyComparison() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-white py-10 xl:py-32 px-4 font-sans">
      <style>{swiperStyles}</style>
      <div className="w-[93vw] xl:w-[80vw] mx-auto">
        <h2 className="text-center text-4xl sm:text-6xl font-['Playfair_Display'] mb-14 text-gray-800">
          Property Investment Comparison
        </h2>

        {/* This div is now a Swiper container instead of a grid */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            // Show 2 slides on screens >= 640px (sm)
            640: {
              slidesPerView: 2,
            },
            // Show 4 slides on screens >= 1024px (lg)
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {PROPERTY_DATA.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`group relative rounded-xl px-6 py-10 mb-20 transition-all duration-500 ease-in-out cursor-pointer h-full flex flex-col justify-between 
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

                <a
                  href="#"
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
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}