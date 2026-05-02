import { personalInfo } from "@/data/portfolio";
import { fadeUp, scaleIn, sectionContainer, viewportOnce } from "@/lib/motion";
import { motion } from "framer-motion";
import { Github, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-12 text-center">
          <p className="text-primary font-mono text-sm mb-2">{"// Contact"}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            I'm always open to new opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Mail,
              label: "Email",
              value: personalInfo.email,
              href: `mailto:${personalInfo.email}`,
            },
            {
              icon: Phone,
              label: "Phone",
              value: personalInfo.phone,
              href: `tel:${personalInfo.phone}`,
            },
            { icon: MapPin, label: "Location", value: personalInfo.location },
            {
              icon: Github,
              label: "GitHub",
              value: personalInfo.github,
              href: `https://github.com/${personalInfo.github}`,
            },
          ].map((item, i) => (
            <motion.div key={i} variants={scaleIn}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-5 flex flex-col items-center gap-3 hover:border-primary/30 transition-colors group hover-lift"
                >
                  <item.icon
                    size={20}
                    className="text-primary group-hover:scale-110 transition-transform"
                  />
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground text-center break-all">
                    {item.value}
                  </span>
                </a>
              ) : (
                <div className="glass rounded-xl p-5 flex flex-col items-center gap-3">
                  <item.icon size={20} className="text-primary" />
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground text-center">
                    {item.value}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
