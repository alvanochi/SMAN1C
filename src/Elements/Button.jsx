import { motion } from "framer-motion";
export default function Button({ children, classname }) {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      className={`px-8 font-inter py-4 text-blue-700 ${classname} rounded-full`}
    >
      {children}
    </motion.button>
  );
}
