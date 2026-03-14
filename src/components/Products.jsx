import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
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

const Products = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <motion.section
      id="منتجاتنا"
      className="py-20 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* عنوان المنتجات */}
      <h2 className="text-center text-3xl font-bold mb-4">
        نبذه عن منتجات ماي واي
      </h2>

      <p className="text-center text-lg mb-2">
        ماي واي لديها اكثر من 950 منتج
      </p>

      <div className="w-20 h-1 mx-auto bg-[#C4006B] rounded-full mb-10"></div>

      <SwiperSection images={images} setActiveImage={setActiveImage} />

      {/* قسم المخبوزات */}

      <h2 className="text-center text-3xl font-bold mt-20 mb-4">
        قسم المخبوزات
      </h2>

      <p className="text-center text-lg mb-2">
        تشكيلة لذيذة من المخبوزات
      </p>

      <div className="w-20 h-1 mx-auto bg-[#C4006B] rounded-full mb-10"></div>

      <SwiperSection images={bakeryImages} setActiveImage={setActiveImage} />

      {/* Modal لعرض الصورة مكبرة */}

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="relative bg-white rounded-xl max-w-2xl w-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt=""
                className="w-full max-h-[700px] object-cover rounded-lg"
              />

              <button
                className="absolute top-4 right-4 text-black text-xl"
                onClick={() => setActiveImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
};

const SwiperSection = ({ images, setActiveImage }) => (
  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    centeredSlides={true}
    slidesPerView={3}
    spaceBetween={30}
    loop={true}
    initialSlide={Math.floor(images.length / 2)}
    className="products-swiper w-full max-w-[1200px]"
    breakpoints={{
      0: {
        slidesPerView: 1.3,
        navigation: false,
      },
      768: {
        slidesPerView: 3,
        navigation: true,
      },
    }}
  >
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        {({ isActive }) => (
          <motion.img
            src={img}
            alt=""
            onClick={() => setActiveImage(img)}
            className={`w-full h-[400px] object-cover rounded-2xl cursor-pointer transition-all duration-500
            ${
              isActive
                ? "scale-100 opacity-100 z-10"
                : "scale-90 opacity-60"
            }`}
          />
        )}
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Products;