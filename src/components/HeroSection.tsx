import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-[hsl(0,0%,80%)] flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-[hsl(0,0%,15%)] text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ervin Behxheti
        </motion.h1>
        <motion.h2
          className="text-[hsl(0,0%,0%)] text-2xl mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Web Developer & Designer
        </motion.h2>
        <motion.p
          className="text-[hsl(0,0%,5%)] mt-6 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Passionate about building beautiful and functional web experiences.
        </motion.p>
        <motion.a
          href="/path-to-cv.pdf"
          download
          className="mt-6 px-6 py-3 bg-accent text-[hsl(0,0%,100%)] font-semibold rounded hover:bg-opacity-80"
          whileHover={{ scale: 1.1 }}
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
