import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      
      {/* Background Grid Pattern (Opsional: Memberi tekstur halus) */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10" 
           style={{
             backgroundImage: "radial-gradient(#888 1px, transparent 1px)",
             backgroundSize: "24px 24px"
           }} 
      />

      {/* Background Glow Blob */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
         <div className="h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px] dark:bg-primary/10" />
      </div>

      <div className="z-10 text-center">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[10rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/20 select-none sm:text-[12rem]">
            404
          </h1>
          
          {/* Floating Element (Ghost/Satellite effect) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 right-0 sm:-right-8 rounded-full bg-primary/10 px-4 py-1 text-sm font-mono text-primary backdrop-blur-md border border-primary/20"
          >
            System Failure
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 space-y-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            Oops! You seem lost in space.
          </h2>
          <p className="text-muted-foreground max-w-[400px] mx-auto">
            The page you are looking for doesn't exist or has been moved to another universe.
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-primary-foreground shadow transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1">
              &larr;
            </span>
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;