import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-purple-900/20 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4">
                <p className="text-slate-400 text-sm flex items-center gap-2">
                    Made with <Heart size={16} className="text-purple-500 fill-purple-500" /> by Gelila Dereje
                </p>
                <p className="text-slate-600 text-xs">
                    © {new Date().getFullYear()} All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
