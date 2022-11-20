import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Food Junction</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @MBAFoodJunction</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        {/* <a href="">
          <AiFillYoutube />
        </a>
        <a href="">
          <AiFillInstagram />
        </a> */}

        <a href="https://github.com/prateek-bka">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
