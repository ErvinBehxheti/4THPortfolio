import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/about-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-white text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-white mt-6 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m a passionate web developer with expertise in creating engaging,
          high-performance websites. With a strong foundation in modern web
          technologies, I thrive on delivering intuitive and accessible user
          experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
