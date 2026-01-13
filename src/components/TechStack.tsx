import { motion } from "framer-motion";
import { techStack } from "@/constants/data";

export const TechStack = () => {
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="py-24 overflow-hidden
      bg-secondary/95 dark:bg-black/90 backdrop-blur-none 
      md:bg-secondary/20 md:dark:bg-black/20 md:backdrop-blur-sm">
      
      <div className="container px-4 mx-auto mb-8 text-center">
        <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
          Technologies Used
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative flex w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] will-change-transform transform-gpu">
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group relative flex flex-col items-center justify-center mx-8 min-w-[100px]"
            >
              {/* Icon Box */}
              <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl 
                bg-white border border-black/5 shadow-sm
                dark:bg-white/5 dark:border-white/5 dark:shadow-none
                group-hover:bg-white group-hover:border-primary/20 
                dark:group-hover:bg-white/10 dark:group-hover:border-white/20 
                transition-colors duration-300 md:backdrop-blur-sm"> 

                <img
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  decoding="async"
                  className="relative w-10 h-10 object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                  loading="lazy"
                />
              </div>

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