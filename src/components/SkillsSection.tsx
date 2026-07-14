import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";

export const SkillBadge = ({
  skill,
  index,
}: {
  skill: string;
  index: number;
}) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ scale: 1.08, y: -2 }}
    className="px-4 py-2 rounded-lg text-sm font-mono border border-border bg-secondary text-secondary-foreground hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_-3px_hsl(175_80%_50%/0.4)] transition-all cursor-default"
  >
    {skill}
  </motion.span>
);

const SkillsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2">{"// Skills"}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="glass rounded-xl p-6 mb-8">
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((s, i) => (
              <SkillBadge key={s} skill={s} index={i} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((s, i) => (
                <SkillBadge key={s} skill={s} index={i} />
              ))}
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((s, i) => (
                <SkillBadge key={s} skill={s} index={i} />
              ))}
            </div>
          </div>
          <div className="glass rounded-xl p-6">
          <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            AI / ML
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.aiMl.map((s, i) => (
              <SkillBadge key={s} skill={s} index={i} />
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
