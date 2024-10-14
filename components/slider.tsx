"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import testPic1 from "@/assets/images/testimonial-1.png";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    id: 1,
    name: "name",
    role: "CEO",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh. Tristique amet sed massa niblectus netus in. Aliquet donec morbi convallis pretium",
    img: testPic1,
  },
  {
    id: 2,
    name: "name",
    role: "CTO",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh. Tristique amet sed massa niblectus netus in. Aliquet donec morbi convallis pretium",
    img: testPic1,
  },
  {
    id: 3,
    name: "name",
    role: "CFO",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh. Tristique amet sed massa niblectus netus in. Aliquet donec morbi convallis pretium",
    img: testPic1,
  },
  {
    id: 4,
    name: "name",
    role: "COO",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh. Tristique amet sed massa niblectus netus in. Aliquet donec morbi convallis pretium",
    img: testPic1,
  },
];

export default function Slider() {
  const renderTestimonial = testimonials.map((testimonial) => (
    <SwiperSlide key={testimonial.id}>
      <div className="bg-[#f8f8f8] p-6 rounded-lg transition-all duration-300 swiper-slide-content">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:mr-10">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src={testimonial.img}
                alt={"name"}
                width={128}
                height={128}
                objectFit="cover"
                className="scale-105"
              />
            </div>
          </div>
          <div className="md:flex-1">
            <blockquote className="text-gray-600 mb-4 text-xs md:text-sm">
              <span className="text-pumpkin-600 text-lg font-semibold">
                &#x201D;
              </span>
              {testimonial.comment}
              <span className="text-pumpkin-600 text-lg font-semibold">
                &#x201E;
              </span>
            </blockquote>
            <div>
              <p className="font-bold text-lg dark:text-black">
                {testimonial.name}
              </p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className="slider-container">
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect={"coverflow"}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        autoplay={true}
        centeredSlides={true}
        spaceBetween={100}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        loop={true}
        className="coverflow mb-28"
      >
        {renderTestimonial}
      </Swiper>
    </div>
  );
}
