import { motion } from "framer-motion";
import { Heart, Code, Coffee } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo/Name */}
          <motion.div
            className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Muxammadaziz Xakimov
          </motion.div>

          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            FullStack Developer passionate about creating innovative web
            solutions
          </p>

          <motion.div
            className="flex items-center justify-center space-x-2 text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <Heart className="w-5 h-5 text-red-400 fill-current" />
            </motion.div>
            <span>and</span>
            <Code className="w-5 h-5 text-cyan-400" />
            <span>and lots of</span>
            <Coffee className="w-5 h-5 text-yellow-600" />
          </motion.div>

          <div className="text-gray-500 text-sm">
            © {currentYear} Muxammadaziz Xakimov. All rights reserved.
          </div>

          {/* Tech Stack Credit */}
          <div className="text-gray-600 text-xs mt-2">
            Built with React.js, Tailwind CSS & Framer Motion
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
