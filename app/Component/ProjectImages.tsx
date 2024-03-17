'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import Image from 'next/image';

type Props = {
    slideShowImages: string[];
}

export default function ProjectImages({slideShowImages}: Props) {
  return (
    <div className="w-full">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
    //   autoplay={{
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   }}
      loop={true}
      pagination={{
        clickable: true,
      }}
     
    >
    
{slideShowImages.map((image, i) => 
            <SwiperSlide key={image}>
                 <Image className="object-cover hover:scale-105 w-full h-auto max-h-[200px] xl:max-h-[300px] cursor-pointer transition-all duration-300 ease-in-out" src={image} alt="project-image" width={500} height={500} />
            </SwiperSlide>
              )}


    </Swiper>
    </div>
  )
}