"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Lumena",
    price: "AED 2.5M",
    number: "01",
    description: "Premium commercial spaces in the heart of Dubai",
    image: "/images/img_rectangle_34624490.png",
  },
  {
    id: 2,
    name: "Townsquare",
    price: "AED 1.14M",
    number: "02",
    description: "Modern residential community with luxury amenities",
    image: "/images/sample_2.jpg",
  },
  {
    id: 3,
    name: "Grand Polo",
    price: "AED 5.67M",
    number: "03",
    description: "Exclusive waterfront properties with stunning views",
    image: "/images/sample_3.jpg",
  },
  {
    id: 4,
    name: "Aviaan",
    price: "AED 1.3M",
    number: "04",
    description: "Contemporary living spaces in prime location",
    image: "/images/sample_3.jpg",
  },
];

function ProjectGallery() {
  const [currentProject, setCurrentProject] = useState(0);
  const project = projects[currentProject];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="w-full bg-white py-[5px] sm:py-[7px] md:py-[10px]">
      <div className="w-full px-[28px] sm:px-[42px] md:px-[56px] py-[28px] sm:py-[42px] md:py-[56px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full h-[287px] sm:h-[430px] md:h-[574px] rounded-[12px] sm:rounded-[18px] md:rounded-[24px] relative bg-cover bg-center flex items-center overflow-hidden"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          <div className="w-full px-[7px] sm:px-[10px] md:px-[14px] py-[21px] sm:py-[31px] md:py-[42px] relative z-10">
            <div className="flex flex-col items-center gap-[173px] sm:gap-[259px] md:gap-[346px] w-full">
              <motion.div
                className="flex flex-col items-start w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-[37px] sm:text-[46px] md:text-[56px] font-bold leading-[55px] sm:leading-[69px] md:leading-[84px] text-left capitalize text-white font-['Poppins']">
                  {project.name}
                </h3>
                <span className="text-[13px] sm:text-[16px] md:text-[20px] font-light leading-[20px] sm:leading-[25px] md:leading-[30px] text-left capitalize text-white/60 font-['Poppins'] ml-[2px] sm:ml-[3px] md:ml-[4px] mt-[-12px] sm:mt-[-15px] md:mt-[-18px]">
                  {project.price}
                </span>
              </motion.div>

              <motion.div
                className="flex flex-col items-start w-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center">
                    <Image
                      src="/images/img_icon_solid_location.svg"
                      alt="Location"
                      width={24}
                      height={24}
                      className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] md:w-[24px] md:h-[24px]"
                    />
                    <span className="text-[14px] sm:text-[16px] md:text-[18px] font-medium leading-[19px] sm:leading-[21px] md:leading-[25px] text-center text-white font-['Manrope'] ml-[4px] sm:ml-[6px] md:ml-[8px]">
                      Dubai
                    </span>
                  </div>
                  <div className="flex items-center gap-[8px] sm:gap-[12px] md:gap-[16px]">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevProject}
                    >
                      <Image
                        src="/images/img_arrow_left.svg"
                        alt="Previous"
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] md:w-[24px] md:h-[24px]"
                      />
                    </motion.button>
                    <div className="bg-accent rounded-full  border-[7px] sm:border-[8px] md:border-[10px] border-[#fb57114c]">
                      <span className="text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-[19px] sm:leading-[21px] md:leading-[25px] text-center text-white font-['Manrope']">
                        {project.number}/{projects.length.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextProject}
                    >
                      <Image
                        src="/images/img_arrow_right.svg"
                        alt="Next"
                        width={24}
                        height={24}
                        className="w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] md:w-[24px] md:h-[24px]"
                      />
                    </motion.button>
                  </div>
                </div>
                <p
                  className="text-[13px] sm:text-[16px] md:text-[20px] font-light leading-[20px] sm:leading-[25px] md:leading-[30px] text-left capitalize text-white font-['Poppins'] ml-[2px] sm:ml-[3px] md:ml-[4px] mt-[-17px] sm:mt-[-21px] md:mt-[-26px]"
                  style={{ boxShadow: "0px 4px 4px rgba(136, 136, 136, 1)" }}
                >
                  {project.description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectGallery;
