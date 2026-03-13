import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="hero-section w-full overflow-hidden pt-20" // pt-20 بدل padding-top: 80px
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="./headerr.jpg"
        alt="header"
        className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[100vh] object-contain md:object-cover"
      />
    </motion.div>
  )
}

export default Home;
