import { Code2, Brain, Coffee } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-950 text-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
                        About Me
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-purple-300">
                            Passionate 4th-Year Software Engineering Student
                        </h3>
                        <p className="leading-relaxed text-slate-400">
                            I am currently pursuing my degree at Dire Dawa University. My journey in tech has been driven by a curiosity to understand how things work and a desire to build solutions that make a difference.
                        </p>
                        <p className="leading-relaxed text-slate-400">
                            I have developed intermediate proficiency in <span className="text-purple-400 font-medium">problem-solving</span> and <span className="text-purple-400 font-medium">responsive web design</span>. I enjoy tackling complex challenges and turning them into clean, efficient code.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 rounded-xl bg-purple-900/10 border border-purple-800/30 flex items-center gap-3">
                                <Code2 className="text-purple-500" />
                                <span className="font-medium">Clean Code</span>
                            </div>
                            <div className="p-4 rounded-xl bg-purple-900/10 border border-purple-800/30 flex items-center gap-3">
                                <Brain className="text-purple-500" />
                                <span className="font-medium">Problem Solving</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Image Placeholder */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative p-8 bg-slate-900 ring-1 ring-purple-900/50 rounded-2xl leading-none flex items-center justify-center aspect-video">
                            <div className="text-center">
                                <Code2 size={64} className="mx-auto text-purple-700/50 mb-4" />
                                <p className="text-slate-500 font-mono text-sm">
                                    &lt;HelloWorld /&gt;
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
