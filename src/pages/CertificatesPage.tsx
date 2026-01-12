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
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Certifications
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              A collection of professional certifications and completed learning paths 
              that demonstrate my commitment to continuous learning.
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certificates.map((cert) => (
              <motion.div key={cert.id} variants={itemVariants}>
                <Card className="glass-card p-6 h-full group cursor-pointer transition-all duration-300 hover:border-yellow-500/30 relative overflow-hidden">
                  {/* Gold accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 opacity-60" />
                  
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-start gap-4">
                      {/* Certificate Icon */}
                      <div className="w-14 h-14 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-500/20">
                        <Award className="w-7 h-7 text-yellow-500" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-lg font-bold text-foreground leading-tight">
                            {cert.title}
                          </h3>
                          {cert.credentialLink && (
                            <a 
                              href={cert.credentialLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="shrink-0"
                            >
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-yellow-500 transition-colors" />
                            </a>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="border-yellow-500/30 text-yellow-500 text-xs">
                            {cert.issuer}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                        
                        {cert.description && (
                          <p className="text-muted-foreground text-sm leading-relaxed">
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Card className="glass-card p-8 inline-block">
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-4xl font-bold text-yellow-500">{certificates.length}</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div className="text-4xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Learning Paths</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div className="text-4xl font-bold text-secondary">∞</div>
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
