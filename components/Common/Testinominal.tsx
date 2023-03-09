import { AcfImage } from "@/types";
import Image from "next/image";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

import { Swiper, SwiperSlide } from "swiper/react";

export default function Testinominal({ images }: { images?: AcfImage[] }) {
  const imgs = [
    {
      title: "saa",
      full_image_url: "/imgs/QBE.png.webp",
    },
    {
      title: "saa",
      full_image_url: "/imgs/Prospa.png.webp",
    },
    {
      title: "saa",
      full_image_url: "/imgs/NAB.png.webp",
    },
    {
      title: "saa",
      full_image_url: "/imgs/QBE.png.webp",
    },

    {
      title: "saa",
      full_image_url: "/imgs/NAB.png.webp",
    },
    {
      title: "saa",
      full_image_url: "/imgs/La-Trobe.png",
    },
    {
      title: "saa",
      full_image_url: "/imgs/Prospa.png.webp",
    },
    {
      title: "saa",
      full_image_url: "/imgs/NAB.png.webp",
    },
    {
      title: "saa",
      full_image_url: "/imgs/QBE.png.webp",
    },
    {
      title: "saa",
      full_image_url: "/imgs/NAB.png.webp",
    },
    {
      title: "saa",
      full_image_url: "/imgs/Prospa.png.webp",
    },
    {
      title: "saa",
      full_image_url: "/imgs/NAB.png.webp",
    },
    {
      title: "saa",
      full_image_url: "/imgs/QBE.png.webp",
    },
  ];
  return (
    <div className="bg-gray-bg ">
      <div className="md:px-16 px-2  max-w-site-full mx-auto py-8  lg:py-20">
        <div>
          <h3 className="text-center mb-8 pt-2 font-isidorasans_semi_bold    text-24px ">
            Choice of over 70 lenders
          </h3>
          <Swiper
            className="  max-h-44"
            autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
            breakpoints={{
              320: {
                slidesPerView: 3,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              // when window width is >= 640px
              800: {
                slidesPerView: 10,
              },
            }}
            slidesPerView={4}
            loop
          >
            {imgs.map((i) => (
              <SwiperSlide>
                <Image
                  alt={i.title}
                  src={i.full_image_url}
                  width={80}
                  height={30}
                />{" "}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
