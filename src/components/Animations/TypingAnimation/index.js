import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i < text.length; i++) {
        setDisplayText(text.substring(0, i + 1));
        await new Promise((resolve) => setTimeout(resolve, 100)); // Ajuste a velocidade de digitação conforme necessário
      }
    };

    typeText();
  }, [text]);

  return <motion.div>{displayText}</motion.div>;
};

export default TypingAnimation;
