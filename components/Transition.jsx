import { motion } from "framer-motion";

const Transition = () => {
  const transitionVariants = {
    initial: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };

  return (
    <>
      {["#2e2257", "#3b2d71", "#4b3792"].map((color, index) => (
        <motion.div
          key={color}
          role="presentation"
          className={`fixed top-0 bottom-0 right-full w-screen h-screen z-${30 - index * 10} bg-[${color}]`}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

export default Transition;