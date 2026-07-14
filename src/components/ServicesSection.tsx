import { motion } from "framer-motion";
import { Brain, Code, Server, ShieldCheck } from "lucide-react";
import { sectionContainer, fadeUp, viewportOnce } from "@/lib/motion";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and performant web applications using React, Next.js, Tailwind CSS, and TypeScript. Pixel-perfect UI with smooth animations and seamless user experiences.",
    highlights: ["React & Next.js Apps", "Responsive Design", "UI/UX Implementation", "Performance Optimization"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing and developing robust server-side solutions with Node.js, Express, NestJS, and Hono.js. RESTful APIs, database architecture, and scalable backend systems.",
    highlights: ["REST API Development", "Database Design", "Authentication Systems", "Server Architecture"],
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description:
      "Building intelligent AI chatbots, agentic AI workflows, and predictive classification systems that automate tasks and deliver data-driven insights.",
    highlights: ["AI Chatbot Development", "Agentic AI Workflows", "Predictive Classification", "AI Automation", "RAG - Retrieval-Augmented Generation" ],
  },
];

const ServicesSection = () => {
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
          <p className="text-primary font-mono text-sm mb-2">{"// Services"}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg">
            End-to-end development and security services to bring your ideas to life — safely.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group flex flex-col hover-lift"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
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
      </motion.div>
    </section>
  );
};

export default ServicesSection;
