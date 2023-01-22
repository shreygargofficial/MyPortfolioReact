import React from "react";
import { css } from "aphrodite";
import { footerStyle } from "./Footer.style";
function Footer() {
  return (
    <footer className={css(footerStyle.footer)}>
      <section className={css(footerStyle.sections)}>
        <p>Contact: 7305898410</p>
        <p> Email: <a href="mailto: shreygargofficial@gmail.com"> shreygargofficial@gmail.com</a></p>
        <p>Resume: <a href="https://docs.google.com/document/d/1q_Jf4Z2wpIbXTQtKiES-CSkIari15j7JrcLvPw1RTl0/edit?usp=share_link">Download</a></p>
      </section>
      <section className={css(footerStyle.sections)}>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/shreygargofficial/">
          shreygargofficial
          </a>
        </p>
        <p>
          Facebook:{" "}
          <a href="https://www.facebook.com/shreygargofficial">
          shreygargofficial
          </a>
        </p>
        <p>
          Instagram:
          <a href="https://www.instagram.com/shreygargofficial/">
          shreygargofficial
          </a>
        </p>
      </section>
      <section className={css(footerStyle.sections)}>
        <p>
          GitHub:{" "}
          <a href="https://github.com/shreygargofficial">
          shreygargofficial
          </a>
        </p>
        <p>
          Qapaper: <a href="https://www.qapaper.com/">Qapaper</a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
