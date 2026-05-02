import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { sectionContainer, fadeUp, fadeInLeft, viewportOnce } from "@/lib/motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">{"// Experience"}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Where I've <span className="text-gradient">Worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeInLeft}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background hidden md:block" />

                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-colors hover-lift">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2">
                        <Briefcase size={16} className="text-primary" />
                        {exp.company}
                        {exp.url && (
                          <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </h3>
                      <p className="text-sm text-primary font-mono">{exp.role}</p>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono bg-secondary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{exp.type}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
