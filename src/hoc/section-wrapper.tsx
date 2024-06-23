import { motion } from "framer-motion";

import { styles } from "../styles";
import { cn } from "../utils/lib";
import { staggerContainer } from "../utils/motion";

type SectionWrapperProps = {
  children: React.ReactNode;
  idName?: string;
};

export const SectionWrapper = ({ children, idName }: SectionWrapperProps) => (
  <motion.section
  variants={staggerContainer()}
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  
  className={cn(styles.padding, "max-w-7xl mx-auto relative z-0")}
>
  <span className="hash-span" id={idName}>
    &nbsp;
  </span>
  {children}
</motion.section>
);
