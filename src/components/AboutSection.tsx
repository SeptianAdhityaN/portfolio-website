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
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a <span className="text-foreground font-medium">{profile.role}</span> on a journey 
                to becoming a specialist. My path through GDGoc taught me to learn rapidly across 
                multiple domains from crafting pixel-perfect UIs to architecting cloud solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My ambition is to bridge <span className="text-primary font-medium">Web Development</span> with
                <span className="text-secondary font-medium"> Cyber Security</span> standards, creating 
                applications that are not only beautiful and functional but fundamentally secure.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => {
                const IconComponent = iconMap[skill.iconName as keyof typeof iconMap];
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card px-4 py-3 flex items-center gap-3"
                  >
                    {IconComponent && <IconComponent className={`w-5 h-5 ${skill.color}`} />}
                    <span className="text-sm font-medium text-foreground">{skill.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Strengths */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
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

          {/* Right - Timeline & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Code Visual */}
            <div className="glass-card p-4 font-mono text-sm overflow-hidden">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-secondary/60" />
              </div>
              <pre className="text-muted-foreground overflow-x-auto">
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

            {/* Timeline */}
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 border-l-2 border-primary"
                >
                  <span className="text-xs text-primary font-mono">{milestone.year}</span>
                  <h4 className="text-foreground font-semibold mt-1">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
