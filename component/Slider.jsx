import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";


const Slider = () => {
  return (
    <Swiper
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="ml-5 max-md:h-[70vh]">
          <Image
            src={"/images/shoe1.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto "}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/shoe2.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={"/images/shoe3.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={"/images/shoe4.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={"/images/shoe5.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={"/images/shoe6.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={"/images/shoe7.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={"/images/shoe8.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto"}
          />
        </SwiperSlide>

        {/* <SwiperSlide>
          <Image
            src={"/images/shoe9.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto"}
          />
        </SwiperSlide> */}
{/* 
        <SwiperSlide>
          <Image
            src={"/images/shoe10.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={"/images/shoe11.jpeg"}
            width={300}
            height={500}
            alt={"shoe"}
            className={"m-auto"}
          />
        </SwiperSlide> */}
      </Swiper>
  )
}

export default Slider