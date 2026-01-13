import { motion } from "framer-motion";
import { techStack } from "@/constants/data";

export const TechStack = () => {
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="py-24 overflow-hidden bg-secondary/20 dark:bg-black/20 backdrop-blur-sm">
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
        // PERUBAHAN UTAMA DISINI:
        // 1. Menggunakan mask-image agar fade effect menyatu sempurna dengan background apapun (light/dark).
        // 2. Menggunakan 'transparent, black 10%' artinya fade hanya terjadi di 10% area pinggir (lebih pendek).
        // 3. Jika ingin lebih pendek lagi, ubah 10% menjadi 5%, dan 90% menjadi 95%.
        className="relative flex w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        {/* Gradient Masking LAMA DIHAPUS (Hapus div ini agar tidak ada kabut putih) */}
        {/* <div className="absolute inset-0 ... /> */} 

        {/* Marquee Container */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group relative flex flex-col items-center justify-center mx-8 min-w-[100px] transition-all duration-300"
            >
              {/* Icon Box */}
              <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl 
                bg-white/60 border border-black/5 shadow-sm
                dark:bg-white/5 dark:border-white/5 dark:shadow-none
                group-hover:bg-white group-hover:border-primary/20 
                dark:group-hover:bg-white/10 dark:group-hover:border-white/20 
                transition-all duration-300 backdrop-blur-sm">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="relative w-10 h-10 object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
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