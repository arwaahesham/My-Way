'use client';
import Image from "next/image";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      id="home"
      className="relative w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Visually hidden h1 for SEO */}
      <h1 className="sr-only">
        MyWay - ماي واي مصر: عالم الجمال والفرص مع منتجات ماي واي الأصلية
      </h1>
      {/* Desktop Image */}
      <div className="hidden md:block w-full h-full">
        <Image
          src="/headerr.jpg"
          alt="مجموعة متنوعة من منتجات ماي واي للعناية والجمال معروضة بشكل جذاب"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* Mobile Image */}
      <div className="block md:hidden w-full h-full">
        <Image
          src="/header-mobile.png"
          alt="مجموعة متنوعة من منتجات ماي واي للعناية والجمال معروضة بشكل جذاب"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </motion.section>
  )
}

export default Home;