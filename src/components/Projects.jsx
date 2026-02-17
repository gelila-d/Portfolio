import { ExternalLink, Github, Code, Layout, Smartphone } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "InterviewPro-AI",
            description: "A full-stack platform for mock interviews and automated coding challenges. Features AI-powered feedback, real-time code execution, and performance analytics.",
            tech: ["MongoDB", "Express", "React", "Node.js"],
            icon: <Code className="w-12 h-12 text-purple-400 mb-4" />,
            link: "#", // Placeholder
            github: "#"
        },
        {
            title: "TripScribe",
            description: "A digital travel journal application allowing users to document their journeys with rich text, photos, and location tagging. Implements full CRUD functionality.",
            tech: ["MERN Stack", "Tailwind CSS"],
            icon: <Layout className="w-12 h-12 text-purple-400 mb-4" />,
            link: "#",
            github: "#"
        },
        {
            title: "Web Games Collection",
            description: "Interactive browser-based games including a scientific Calculator and a Rock-Paper-Scissors game with advanced logic and responsive UI.",
            tech: ["JavaScript", "HTML5", "CSS3"],
            icon: <Smartphone className="w-12 h-12 text-purple-400 mb-4" />,
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
                        Featured Projects
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-900/50 border border-purple-900/30 rounded-2xl p-6 hover:bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                            <div className="relative z-10">
                                <div className="bg-purple-900/20 w-fit p-3 rounded-xl mb-4 group-hover:bg-purple-900/40 transition-colors">
                                    {project.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-purple-300 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 rounded-md bg-purple-900/30 text-purple-300 border border-purple-800/30">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-purple-900/30">
                                    <a href={project.github} className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors text-sm">
                                        <Github size={16} /> Source Code
                                    </a>
                                    <a href={project.link} className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors text-sm">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
