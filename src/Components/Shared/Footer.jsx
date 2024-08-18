import React from "react";
import { css } from "aphrodite";
import { footerStyle } from "./Footer.style";
import {resume} from '../../Utils/links'

function Footer() {
  return (
    <footer className={css(footerStyle.footer)}>
      <section className={css(footerStyle.sections)}>
        <p>Contact: 7305898410</p>
        <p> Email: <a className={css(footerStyle.a)} href="mailto: shreygargofficial@gmail.com"> shreygargofficial@gmail.com</a></p>
        <p>Resume: <a className={css(footerStyle.a)} href={resume}>Download</a></p>
      </section>
      <section className={css(footerStyle.sections)}>
        <p>
          LinkedIn:{" "}
          <a className={css(footerStyle.a)} href="https://www.linkedin.com/in/shreygargofficial/">
          shreygargofficial
          </a>
        </p>
        <p>
          Facebook:{" "}
          <a className={css(footerStyle.a)} href="https://www.facebook.com/shreygargofficial">
          shreygargofficial
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a className={css(footerStyle.a)} href="https://www.instagram.com/shreygargofficial/">
          shreygargofficial
          </a>
        </p>
      </section>
      <section className={css(footerStyle.sections)}>
        <p>
          GitHub:{" "}
          <a className={css(footerStyle.a)} href="https://github.com/shreygargofficial">
          shreygargofficial
          </a>
        </p>
        <p>
          Qapaper: <a className={css(footerStyle.a)} href="https://www.qapaper.com/">Qapaper</a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
