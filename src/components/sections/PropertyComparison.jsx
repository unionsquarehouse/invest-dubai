    'use client';
    import React, { useState } from 'react';
    import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
    import { BsArrowRight } from 'react-icons/bs';
    import CountUp from 'react-countup';

    // Data for each property market, now in a more readable object format
    const PROPERTY_DATA = [
    {
        city: 'Dubai',
        headerNote: 'UAE Property Investment With Tax Benefits',
        price: 438,
        currency: '$',
        isPrimary: true,
        features: [
        { name: 'AVG. PRICE PER SQ. FT.', value: '$438 (£342)', type: 'price' },
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
        { name: 'AVG. PRICE PER SQ. FT.', value: '$2816 (£2,120)', type: 'price' },
        { name: 'RENTAL YIELD', value: 3, type: 'percent' },
        { name: 'CAPITAL APPRECIATION (5Y)', value: '15 – 18%', type: 'text' },
        { name: 'SHORT–TERM RENTAL ROI', value: '3 – 5% ', type: 'text' },
        { name: 'RENTAL INCOME TAX', value: 'UP TO 45%', type: 'text' },
        { name: 'PROPERTY TAX', value: '5–15% ANNUALLY', type: 'text' },
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
        { name: 'AVG. PRICE PER SQ. FT.', value: '$2816 (£2,120)', type: 'price' },
        { name: 'RENTAL YIELD', value: 3, type: 'percent' },
        { name: 'CAPITAL APPRECIATION (5Y)', value: '15 – 18%', type: 'text' },
        { name: 'SHORT–TERM RENTAL ROI', value: '3 – 5% ', type: 'text' },
        { name: 'RENTAL INCOME TAX', value: 'UP TO 45%', type: 'text' },
        { name: 'PROPERTY TAX', value: '5–15% ANNUALLY', type: 'text' },
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
        { name: 'AVG. PRICE PER SQ. FT.', value: '$2816 (£2,120)', type: 'price' },
        { name: 'RENTAL YIELD', value: 3, type: 'percent' },
        { name: 'CAPITAL APPRECIATION (5Y)', value: '15 – 18%', type: 'text' },
        { name: 'SHORT–TERM RENTAL ROI', value: '3 – 5% ', type: 'text' },
        { name: 'RENTAL INCOME TAX', value: 'UP TO 45%', type: 'text' },
        { name: 'PROPERTY TAX', value: '5–15% ANNUALLY', type: 'text' },
        { name: 'VISA WITH PROPERTY', value: false, type: 'boolean' },
        { name: 'FOREIGN OWNERSHIP', value: 'LIMITED LEASEHOLD', type: 'text' },
        ],
    },
    ];

    // Helper component to render the feature value
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
            <FaCheckCircle className="text-green-500 mx-auto text-2xl" />
        ) : (
            <FaTimesCircle className="text-red-500 mx-auto text-2xl" />
        );
        default:
        return <span className="font-medium text-sm">{feature.value}</span>;
    }
    };

    export default function PropertyComparison() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="bg-white py-32 px-4 font-sans">
        <div className="w-[80vw] mx-auto">
            <h2 className="text-center text-4xl sm:text-5xl  font-['Playfair_Display'] mb-4 text-gray-800">
            PROPERTY INVESTMENT COMPARISON
            </h2>
            <p className="text-center text-lg text-gray-500 mb-16 max-w-2xl mx-auto">
            Explore key metrics and benefits of property investments across different
            global cities. Hover over a card to see details.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROPERTY_DATA.map((item, index) => (
                <div
                key={index}
                className={`group relative rounded-xl p-6 transition-all duration-500 ease-in-out cursor-pointer h-full flex flex-col justify-between
                    ${
                    item.isPrimary
                        ? 'bg-black text-white shadow-2xl scale-105'
                        : 'bg-gray-50 hover:bg-gray-100 hover:shadow-lg'
                    }
                    ${
                    hoveredCard === index
                        ? 'shadow-2xl scale-105 z-10'
                        : 'shadow-md'
                    }
                `}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                >
                <div>
                    <div
                    className={`text-2xl font-bold mb-1 transition-colors duration-300 ease-in-out ${
                        item.isPrimary ? 'text-white' : 'text-gray-900'
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
            ))}
            </div>
        </div>
        </section>
    );
    }