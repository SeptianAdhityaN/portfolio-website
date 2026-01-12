import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-border py-8"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Septian Adhitya. Built with{" "}
          <span className="font-mono text-primary">Vite</span>,{" "}
          <span className="font-mono text-primary">React</span> &{" "}
          <span className="font-mono text-primary">Tailwind</span>.
        </p>
      </div>
    </motion.footer>
  );
};
