import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import { education } from "@/data/portfolio";
import { sectionContainer, fadeUp, fadeInLeft, viewportOnce } from "@/lib/motion";

const EducationSection = () => {
  return (
    <section className="section-padding">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">{"// Education"}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeInLeft}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors hover-lift"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2">
                  <GraduationCap size={18} className="text-primary" />
                  {edu.institution}
                  {edu.url && (
                    <a href={edu.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </h3>
                <span className="text-xs text-muted-foreground font-mono bg-secondary px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-primary font-mono mb-1">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
