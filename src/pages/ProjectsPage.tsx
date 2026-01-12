import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Filter } from "lucide-react";
import { projects, type ProjectCategory } from "@/constants/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundWrapper } from "@/components/BackgroundWrapper";

type FilterCategory = "All" | ProjectCategory;

const filterCategories: FilterCategory[] = ["All", "Web", "Game"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const getCategoryColor = (category: ProjectCategory) => {
  switch (category) {
    case "Web":
      return "bg-primary/20 text-primary";
    case "Game":
      return "bg-secondary/20 text-secondary";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getCategoryBorderColor = (category: ProjectCategory) => {
  switch (category) {
    case "Web":
      return "hover:border-primary/30";
    case "Game":
      return "hover:border-secondary/30";
    default:
      return "hover:border-border";
  }
};

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <BackgroundWrapper>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              All Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              A comprehensive collection of my work spanning web development, roblox game scripting, 
              concept designs, and more.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={activeFilter === category 
                    ? "bg-primary text-primary-foreground" 
                    : "border-border text-muted-foreground hover:text-foreground"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card 
                  className={`glass-card p-6 h-full group cursor-pointer transition-all duration-300 ${getCategoryBorderColor(project.category)}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <Badge className={`${getCategoryColor(project.category)} border-0`}>
                          {project.category}
                        </Badge>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </a>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs border-border text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </BackgroundWrapper>
  );
};

export default ProjectsPage;
