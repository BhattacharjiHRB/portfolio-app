import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { personalInfo } from "@/data/portfolio";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-28">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-blob" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-blob" style={{ animationDelay: "6s" }} />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-mono text-sm mb-3 tracking-wider">
              {"// Hello, I'm"}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-4">
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-gradient-animated">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-display font-light mb-6">
              {personalInfo.title}
            </p>
            <p className="text-secondary-foreground leading-relaxed mb-8 max-w-lg">
              {personalInfo.summary}
            </p>

            <div className="flex items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <Mail size={16} />
                Get in Touch
              </a>
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border glow hover:scale-105 transition-transform duration-500">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-primary/30 rounded-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
