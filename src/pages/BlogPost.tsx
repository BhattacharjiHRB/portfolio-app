import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/portfolio";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="section-padding pt-28 text-center">
          <p className="text-muted-foreground">Post not found.</p>
          <Link to="/blog" className="text-primary font-mono text-sm mt-4 inline-block">
            ← Back to blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="section-padding pt-28">
        <article className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/blog"
              className="text-muted-foreground hover:text-primary text-sm font-mono flex items-center gap-1 mb-8"
            >
              <ArrowLeft size={14} /> Back to blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-muted-foreground">{post.date}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {post.title}
            </h1>

            <div className="flex gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-xl font-display font-semibold text-foreground mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {paragraph.split("\n").map((item, j) => (
                        <li key={j} className="text-secondary-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-secondary-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;
