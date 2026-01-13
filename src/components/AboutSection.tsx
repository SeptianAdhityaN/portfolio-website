import { motion } from "framer-motion";
import { CheckCircle2, Code2, Shield, Gamepad2 } from "lucide-react";
import { profile, skills, coreStrengths, milestones } from "@/constants/data";

const iconMap = {
  Code2,
  Shield,
  Gamepad2,
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden w-full">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          {/* Tambahkan min-w-0 agar grid item bisa mengecil */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 w-full min-w-0"
          >
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                I'm a <span className="text-foreground font-medium">{profile.role}</span> on a journey 
                to becoming a specialist. My path through GDGoc taught me to learn rapidly across 
                multiple domains from crafting pixel-perfect UIs to architecting cloud solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                My ambition is to bridge <span className="text-primary font-medium">Web Development</span> with
                <span className="text-secondary font-medium"> Cyber Security</span> standards, creating 
                applications that are not only beautiful and functional but fundamentally secure.
              </p>
            </div>

            {/* Skills Container */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              {skills.map((skill, index) => {
                const IconComponent = iconMap[skill.iconName as keyof typeof iconMap];
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card px-3 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-3"
                  >
                    {IconComponent && <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${skill.color}`} />}
                    <span className="text-xs md:text-sm font-medium text-foreground">{skill.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Strengths */}
            <div className="space-y-3">
              <h4 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Core Strengths
              </h4>
              {coreStrengths.map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-muted-foreground text-sm">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: TIMELINE & VISUAL --- */}
          {/* min-w-0 SANGAT PENTING DISINI agar child elements tidak memaksa lebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 w-full min-w-0" 
          >
            
            {/* Code Visual - FIXED RESPONSIVENESS */}
            <div className="glass-card p-4 w-full max-w-full overflow-hidden"> 
              <div className="flex gap-2 mb-4">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-secondary/60" />
              </div>
              
              {/* Wrapper Scroll Horizontal */}
              <div className="w-full overflow-x-auto">
                {/* Gunakan text-[10px] untuk mobile agar muat lebih banyak */}
                <pre className="font-mono text-[10px] md:text-sm text-muted-foreground">
                  <code>
{`const developer = {
  name: "${profile.name}",
  role: "${profile.role}",
  focus: [
    "Web Development",
    "Roblox Development",
    "Cyber Security"
  ],
  learning: true,
  coffee: "unlimited" ☕
};`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4 w-full">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  // Gunakan max-w-full dan break-words agar teks panjang turun ke bawah
                  className="glass-card p-4 border-l-2 border-primary w-full max-w-full"
                >
                  <span className="text-xs text-primary font-mono block mb-1">{milestone.year}</span>
                  <h4 className="text-foreground font-semibold text-sm md:text-base break-words">
                    {milestone.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-relaxed break-words">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};