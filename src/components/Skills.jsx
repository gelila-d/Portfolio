import { Code, Database, Server, PenTool, GitBranch, Globe } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code className="w-6 h-6 text-purple-400" />,
            skills: ["JavaScript", "HTML", "CSS", "Java", "C++"],
        },
        {
            title: "Frameworks & Libraries",
            icon: <Globe className="w-6 h-6 text-purple-400" />,
            skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
        },
        {
            title: "Databases",
            icon: <Database className="w-6 h-6 text-purple-400" />,
            skills: ["MongoDB", "MySQL"],
        },
        {
            title: "Tools & Others",
            icon: <PenTool className="w-6 h-6 text-purple-400" />,
            skills: ["Git", "GitHub", "REST APIs", "VS Code"],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
                        Technical Skills
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        A collection of technologies I use to build robust and scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/50 backdrop-blur-sm border border-purple-900/30 p-6 rounded-2xl hover:bg-purple-900/10 transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-purple-900/20 rounded-lg group-hover:bg-purple-600/20 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-purple-200">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full border border-slate-700/50 hover:border-purple-500/50 hover:text-purple-200 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
