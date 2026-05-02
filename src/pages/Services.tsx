import { motion } from "framer-motion";
import { Code, Server, ShieldCheck, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { skills, projects } from "@/data/portfolio";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and performant web applications using React, Next.js, Tailwind CSS, and TypeScript.",
    highlights: ["React & Next.js Apps", "Responsive Design", "UI/UX Implementation", "Performance Optimization"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing robust server-side solutions with Node.js, Express, NestJS, and Hono.js. RESTful APIs and scalable systems.",
    highlights: ["REST API Development", "Database Design", "Authentication Systems", "Server Architecture"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consultation",
    description:
      "Identifying vulnerabilities, performing security assessments, and implementing best practices to protect your systems.",
    highlights: ["Vulnerability Assessment", "Penetration Testing", "Security Audits", "Risk Mitigation"],
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <main className="section-padding pt-28">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="text-primary font-mono text-sm mb-2">{"// Services"}</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Services, Skills & <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground mt-3 max-w-lg">
              What I offer, what I know, and what I've built.
            </p>
          </motion.div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary-foreground leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.highlights.map((h, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-primary font-mono text-sm mb-2">{"// Skills"}</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-sm font-mono text-primary mb-4 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-foreground font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-mono text-sm mb-2">{"// Projects"}</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group flex flex-col"
                >
                  <span className="text-[10px] font-mono text-primary/70 uppercase tracking-wider mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-1 rounded bg-secondary text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
