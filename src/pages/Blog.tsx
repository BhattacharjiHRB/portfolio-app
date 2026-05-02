import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Navbar />
      <main className="section-padding pt-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="text-primary font-mono text-sm mb-2">{"// Blog"}</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Thoughts & <span className="text-gradient">Writings</span>
            </h1>
            <p className="text-muted-foreground mt-3">
              Sharing what I learn along the way.
            </p>
          </motion.div>

          <div className="space-y-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="glass rounded-xl p-6 block hover:border-primary/30 transition-colors group hover-lift "
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-secondary-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-primary text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
