import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      id="الرئيسية"
      className="hero-section w-full overflow-hidden pt-20" 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="./headerr.jpg"
        alt="header"
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[100vh] 
                 object-cover md:object-cover
                 mx-auto max-w-full"
      />
    </motion.div>
  )
}

export default Home;