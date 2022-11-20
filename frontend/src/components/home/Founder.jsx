import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Prateek Agrawal</h3>
        <p>
          Hi Everyone! I am Prateek Agrawal, the founder of MBA Food Junction
          <br />
          We offer genuine fine-dining experience
        </p>
      </motion.div>
      Founder
    </section>
  );
};

export default Founder;
