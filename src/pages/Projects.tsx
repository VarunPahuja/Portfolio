import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const isFiltering = searchTerm !== "" || selectedTag !== null;

  const matchesQuery = (project: Project) => {
    const matchesSearch =
      searchTerm === "" ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.hook.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag =
      selectedTag === null || project.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  };

  const filteredMain = useMemo(
    () => projects.filter((project) => project.category !== "learning" && matchesQuery(project)),
    [searchTerm, selectedTag]
  );

  const filteredLearning = useMemo(
    () => projects.filter((project) => project.category === "learning" && matchesQuery(project)),
    [searchTerm, selectedTag]
  );

  const showLearningSection = !isFiltering || filteredLearning.length > 0;
  const totalCount = filteredMain.length + filteredLearning.length;

  const renderProjectCard = (project: Project, variant: "main" | "learning") => (
    <Link to={`/projects/${project.id}`} key={project.id} className="block group/card">
      <motion.article
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        whileHover={variant === "learning" ? { y: -2 } : { y: -4 }}
        className={cn(
          `flex flex-col bg-gradient-to-br ${project.color} backdrop-blur-sm border border-border/50 rounded-2xl`,
          variant === "learning"
            ? "p-5 opacity-80 hover:opacity-100 transition-opacity duration-200"
            : "p-6"
        )}
      >
        <div className="mb-3">
          <h2
            className={cn(
              "font-bold text-foreground font-heading",
              variant === "learning" ? "text-lg" : "text-xl"
            )}
          >
            {project.title}
          </h2>
        </div>
        <p
          className={cn(
            "text-foreground font-medium mb-2 leading-relaxed",
            variant === "learning" ? "text-sm" : "text-[15px]"
          )}
        >
          {project.hook}
        </p>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="px-2.5 py-1 bg-background/50 border border-border/30 text-[11px] font-semibold tracking-wider rounded-full text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          <a
            href={project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            View on GitHub <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </motion.article>
    </Link>
  );

  return (
    <div className="min-h-screen relative bg-background">
      <main className="relative z-10 px-4 pt-16 sm:pt-24 pb-32 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-heading mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A collection of ML, systems, and full-stack projects.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search projects by title, language or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
            />
          </div>
        </motion.div>

        {/* Tag Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedTag === null
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-sm text-muted-foreground font-medium">
            Showing {totalCount} project{totalCount !== 1 ? "s" : ""}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredMain.length > 0 ? (
              filteredMain.map((project) => renderProjectCard(project, "main"))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16"
              >
                <p className="text-muted-foreground">No projects match your search.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Learning Projects */}
        {showLearningSection && (
          <>
            <div className="mt-20 mb-10 h-px bg-border/40" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-8"
            >
              <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-2">
                Learning Projects
              </h2>
              <p className="text-sm text-muted-foreground">
                Explorations and coursework that shaped how I think.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredLearning.map((project) => renderProjectCard(project, "learning"))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </main>
    </div>
  );
};

export default Projects;
