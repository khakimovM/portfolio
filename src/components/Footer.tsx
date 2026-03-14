import { motion } from "framer-motion";
import { Heart, Code, Coffee } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
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

          <p className="text-gray-400  mx-auto">
            FullStack Developer passionate about creating innovative web
            solutions
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
