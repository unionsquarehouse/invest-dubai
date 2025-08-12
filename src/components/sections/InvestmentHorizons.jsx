'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom styles for Swiper arrows
const arrowStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: #9F3349 !important;
    top: 45% !important;
    transition: color 0.3s ease;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #7d283a !important; /* slightly darker on hover */
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.5rem !important;
    font-weight: bold;
  }
    /* Pagination bullets */
  .swiper-pagination-bullet {
    background: #9F3349 !important;
    opacity: 0.5 !important;
    transition: opacity 0.3s ease;
    width:14px;
    height:14px;
    
  }
  
`;

const InvestmentHorizons = () => {
  const features = [
    {
      image: '/assets/golden-visa-red.png',
      title: 'Golden Visa',
      description: 'Invest $544K & Get Your UAE Golden Visa',
      alt: 'Icon for Golden Visa',
    },
    {
      image: '/assets/investment-hub-red.png',
      title: 'Safe Investment Hub',
      description: 'Dubai Is Ranked As #2 Safest Investment Hub For Investors Globally.',
      alt: 'Icon for Safe Investment Hub',
    },
    {
      image: '/assets/low-entry-point-red.png',
      title: 'Low Entry Point',
      description: 'Dubai Offers Properties Starting From Just $204k.',
      alt: 'Icon for Low Entry Point',
    },
    {
      image: '/assets/payment-plan-red.png',
      title: 'Flexible Payment Plans',
      description:
        'Dubai Offers Payment Plans From 1% Per Month, Extending Up To 3 Years Post-Handover.',
      alt: 'Icon for Flexible Payment Plans',
    },
    {
      image: '/assets/infra-growth-red.png',
      title: 'Strong Infrastructure Growth',
      description:
        'Upcoming Etihad Rail, Blue Line Metro, And Dubai Design District Under D33 Are Set To Boost Dubai Real Estate Profits By 25%+',
      alt: 'Icon for Strong Infrastructure Growth',
    },
    {
      image: '/assets/properties-all-investors-red.png',
      title: 'Properties For All Investors',
      description:
        'From Beachfront Apartments, Family Communities To Luxurious Golf Villas, Dubai Delivers All',
      alt: 'Icon for Properties For All Investors',
    },
  ];

  return (
    <div className="bg-white py-12 px-4">
      {/* Inject custom Swiper arrow styles */}
      <style>{arrowStyles}</style>

      <div className="w-[93vw] xl:w-[80vw] mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-['Playfair_Display'] text-center mb-6 md:mb-8">
          Investment Horizons
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center pt-10 pb-14  h-full">
                <div className="flex justify-center mb-4 w-28 ">
                  <Image src={feature.image} alt={feature.alt} width={120} height={120} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InvestmentHorizons;
