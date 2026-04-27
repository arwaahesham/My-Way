'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
  "/images/img11.jpg",
  "/images/img12.jpg",
  "/images/img13.jpg"
];

const bakeryImages = [
  "/images/bakery1.jpg",
  "/images/bakery2.jpg",
  "/images/bakery3.jpg",
  "/images/bakery4.jpg",
  "/images/bakery5.jpg",
  "/images/bakery6.jpg",
  "/images/bakery7.jpg",
  "/images/bakery8.jpg",
  "/images/bakery9.jpg",
  "/images/bakery10.jpg",
  "/images/bakery11.jpg",
  "/images/bakery12.jpg",
];

export default function Products() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="products" className="py-20 px-4">

      <h2 className="text-center text-3xl font-bold mb-4">
        نبذه عن منتجات ماي واي
      </h2>

      <p className="text-center text-lg mb-10">
        ماي واي لديها اكثر من 950 منتج
      </p>

      <SwiperSection images={images} setActiveImage={setActiveImage} />

      <h2 className="text-center text-3xl font-bold mt-20 mb-4">
        قسم المخبوزات
      </h2>

      <p className="text-center text-lg mb-10">
        تشكيلة لذيذة من المخبوزات
      </p>

      <SwiperSection images={bakeryImages} setActiveImage={setActiveImage} />

      {/* Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setActiveImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-[90%] max-w-4xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={activeImage}
                alt="preview"
                fill
                className="object-contain rounded-xl"
              />

              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={() => setActiveImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

const SwiperSection = ({ images, setActiveImage }) => {
  const MotionImage = motion(Image);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      centeredSlides
      loop
      spaceBetween={20}
      className="w-full max-w-[1200px] mx-auto"

      breakpoints={{
        0: {
          slidesPerView: 1.2,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}

      // 🔥 keep simple
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <div className="relative w-full h-[350px] sm:h-[350px] lg:h-[400px]">
              <MotionImage
                src={img}
                alt={`منتج ${index + 1}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                onClick={() => setActiveImage(img)}
                className={`object-cover rounded-2xl cursor-pointer transition-all duration-500
                ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-60"}`}
              />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};