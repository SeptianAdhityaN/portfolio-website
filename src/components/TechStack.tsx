import { motion } from "framer-motion";
import { techStack } from "@/constants/data";

export const TechStack = () => {
  // Duplikat array agar looping seamless
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="py-24 overflow-hidden border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container px-4 mx-auto mb-8 text-center">
        <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
          Technologies Used
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex w-full"
      >
        {/* Gradient Masking */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />

        {/* Marquee Container */}
        {/* PERUBAHAN DISINI: Menggunakan 'animate-marquee' sesuai config kamu */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group relative flex flex-col items-center justify-center mx-8 min-w-[100px] transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 backdrop-blur-sm">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="relative w-10 h-10 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Label */}
              <span className="mt-4 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};