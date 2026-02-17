import { Mail, Github, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-purple-950/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
                        Get In Touch
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="max-w-xl mx-auto bg-slate-900/30 p-8 rounded-3xl border border-purple-900/20 backdrop-blur-sm">
                    <div className="space-y-6">
                        <div className="flex items-center gap-6 p-4 rounded-xl bg-slate-900/50 border border-purple-900/30 hover:border-purple-600/50 transition-colors group">
                            <div className="p-4 bg-purple-900/20 rounded-full text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-200 text-lg">Email</h3>
                                <a href="mailto:gelilad1111@gmail.com" className="text-slate-400 hover:text-purple-300 transition-colors">
                                    gelilad1111@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-4 rounded-xl bg-slate-900/50 border border-purple-900/30 hover:border-purple-600/50 transition-colors group">
                            <div className="p-4 bg-purple-900/20 rounded-full text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                <Github size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-200 text-lg">GitHub</h3>
                                <a href="https://github.com/gelila-d" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-300 transition-colors">
                                    github.com/gelila-d
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-4 rounded-xl bg-slate-900/50 border border-purple-900/30 hover:border-purple-600/50 transition-colors group">
                            <div className="p-4 bg-purple-900/20 rounded-full text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-200 text-lg">Phone</h3>
                                <a href="tel:+251914968856" className="text-slate-400 hover:text-purple-300 transition-colors">
                                    +251-914968856
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
