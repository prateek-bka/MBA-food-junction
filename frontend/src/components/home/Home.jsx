import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <h1>MBA Food Junction</h1>
          <p>Here every flavor tells a beautiful story.</p>
          <p>Your culinary adventure awaits.</p>
        </div>

        {/* Adding Animation to MENU Tag */}
        <motion.a
          href="#menu"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          Explore Menu
        </motion.a>
      </section>
      <Founder />
      <Menu />
      );
    </>
  );
};

export default Home;
