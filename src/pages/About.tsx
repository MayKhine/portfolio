import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "50vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div>Hi this is about page</div>
    </motion.div>
  );
};
