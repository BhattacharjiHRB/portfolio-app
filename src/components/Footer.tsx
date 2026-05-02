import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
