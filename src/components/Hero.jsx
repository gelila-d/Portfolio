import { Github, Mail, FileText, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <div className="space-y-6 max-w-3xl">
                    <div className="inline-block animate-bounce">
                        <span className="py-1 px-3 rounded-full bg-purple-900/30 border border-purple-700/50 text-purple-300 text-sm font-medium">
                            Available for Opportunities
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 tracking-tight">
                        Hi, I'm Gelila Dereje
                    </h1>

                    <h2 className="text-2xl sm:text-3xl text-purple-300 font-semibold">
                        Software Engineering Student
                    </h2>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A motivated full-stack developer at Dire Dawa University, focused on building modern, responsive web applications with the MERN stack.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg shadow-purple-900/50 flex items-center gap-2 justify-center"
                        >
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-transparent border border-purple-600 text-purple-300 hover:bg-purple-900/20 font-semibold transition-all flex items-center gap-2 justify-center"
                        >
                            Contact Me <Mail size={18} />
                        </a>
                    </div>

                    <div className="flex gap-6 justify-center pt-12 items-center text-slate-400">
                        <a href="https://github.com/gelila-d" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="mailto:gelilad1111@gmail.com" className="hover:text-purple-400 transition-colors">
                            <Mail size={24} />
                        </a>
                        {/* Add LinkedIn if available, otherwise just these two as requested */}
                    </div>
                </div>

            </div>

            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </section>
    );
};

export default Hero;
