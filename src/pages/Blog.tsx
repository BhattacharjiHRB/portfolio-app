import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const POSTS_PER_PAGE = 10;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    [],
  );

  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = sortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const changePage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

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
            {visiblePosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="glass rounded-xl p-6 block hover:border-primary/30 transition-colors group hover-lift"
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

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => changePage(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                className="px-3 py-2 text-sm rounded-md border border-border bg-background text-foreground disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => changePage(page)}
                  className={`w-9 h-9 rounded-md text-sm font-mono border transition-colors ${
                    page === safeCurrentPage
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => changePage(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                className="px-3 py-2 text-sm rounded-md border border-border bg-background text-foreground disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
