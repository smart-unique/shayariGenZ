import { motion } from 'framer-motion';

export default function SkeletonLoader() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <motion.div 
        className="h-4 bg-gray-200 rounded mb-2 w-3/4"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="h-4 bg-gray-200 rounded mb-2 w-1/2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div 
        className="h-4 bg-gray-200 rounded w-2/3"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
    </div>
  );
}

