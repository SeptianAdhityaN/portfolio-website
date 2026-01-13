import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Award, ExternalLink, Calendar } from "lucide-react";
import { certificates } from "@/constants/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundWrapper } from "@/components/BackgroundWrapper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CertificatesPage = () => {
  return (
    <BackgroundWrapper>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground mb-6 pl-0 hover:bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Certifications
            </h1>
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
              A collection of professional certifications and completed learning paths 
              that demonstrate my commitment to continuous learning.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            {certificates.map((cert) => (
              <motion.div key={cert.id} variants={itemVariants}>
                {/* UBAH: Padding p-5 di mobile, p-6 di desktop */}
                <Card className="glass-card p-5 md:p-6 h-full group cursor-pointer transition-all duration-300 hover:border-yellow-500/30 relative overflow-hidden">
                  {/* Gold accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 opacity-60" />
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="h-full flex flex-col"
                  >
                    {/* Flex layout: Stack di layar sangat kecil, Row di layar biasa */}
                    <div className="flex items-start gap-3 md:gap-4">
                      {/* Certificate Icon */}
                      {/* UBAH: Ukuran icon w-12 di mobile, w-14 di desktop */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-500/20">
                        <Award className="w-6 h-6 md:w-7 md:h-7 text-yellow-500" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          {/* UBAH: Font size responsif */}
                          <h3 className="text-base md:text-lg font-bold text-foreground leading-tight">
                            {cert.title}
                          </h3>
                          {cert.credentialLink && (
                            <a 
                              href={cert.credentialLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="shrink-0 pt-1"
                            >
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-yellow-500 transition-colors" />
                            </a>
                          )}
                        </div>
                        
                        {/* UBAH: Tambahkan flex-wrap agar badge tidak nabrak tanggal */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="outline" className="border-yellow-500/30 text-yellow-500 text-[10px] md:text-xs">
                            {cert.issuer}
                          </Badge>
                          <div className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                        
                        {cert.description && (
                          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Credential Link Button */}
                    {cert.credentialLink && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <a 
                          href={cert.credentialLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="gap-2 border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500/50 w-full"
                          >
                            <Award className="w-4 h-4" />
                            View Credential
                          </Button>
                        </a>
                      </div>
                    )}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section - PERBAIKAN UTAMA DISINI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            {/* UBAH: Hapus inline-block, ganti jadi w-full max-w-3xl mx-auto agar responsif */}
            <Card className="glass-card p-6 md:p-8 w-full max-w-3xl mx-auto">
              
              {/* UBAH: Flex-col (Vertikal) di Mobile, Flex-row (Horizontal) di Desktop */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                
                {/* Stat 1 */}
                <div className="w-full md:w-auto">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500">{certificates.length}</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>

                {/* Divider 1: Horizontal di HP, Vertikal di Desktop */}
                <div className="w-full h-px bg-border md:w-px md:h-12" />

                {/* Stat 2 */}
                <div className="w-full md:w-auto">
                  <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Learning Paths</div>
                </div>

                {/* Divider 2 */}
                <div className="w-full h-px bg-border md:w-px md:h-12" />

                {/* Stat 3 */}
                <div className="w-full md:w-auto">
                  <div className="text-3xl md:text-4xl font-bold text-secondary">∞</div>
                  <div className="text-sm text-muted-foreground">Learning</div>
                </div>
              </div>

            </Card>
          </motion.div>

        </div>
      </main>
      <Footer />
    </BackgroundWrapper>
  );
};

export default CertificatesPage;