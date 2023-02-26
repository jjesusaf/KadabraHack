import Image from "next/image";
import buksLogo from "../public/images/Buks_White.png";
import styles from "../styles/Navbar.module.css";
import Kadabra from "../public/images/Kadabra.svg";

export function Footer() {
  return (
    <footer
      className="pt-4 pb-4 pt-md-5 border-top flex w-full"
      style={{ backgroundColor: "#4F4F4F" }}
    >
      <div className={`${styles.footer1}`}>
        <div>
          <Image src={Kadabra} alt="Bucks Logo" width={180} height={55} />
          <small className="d-block mb-3 text-light">
            Saving dollars for a better{" "}
            <span className={styles.world}>world.</span>
          </small>
        </div>
        <div className="text-white">
          <h5 className="fw-bolder mb-4">COMPAÑIA</h5>
          <p className="">
            <a
              href="https://wonderful-wind-37e.notion.site/Preguntas-frecuentes-FAQs-62680892cf45439d91a10ff6f3294799"
              className="text-decoration-none text-white"
              target="_blank"
              rel="noreferrer"
            >
              FAQs
            </a>
          </p>
          <p>
            <a
              href="https://wonderful-wind-37e.notion.site/Docs-f100f7667336434d8190dd5779f3973e"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-white"
            >
              Docs
            </a>
          </p>
        </div>
        <div className="text-white">
          <h5 className="fw-bolder mb-4">ACERCA</h5>
          <p>
            <a
              href="https://wonderful-wind-37e.notion.site/T-rminos-y-condiciones-a8aac63dc9284d268e72d224b23304a1"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-white"
            >
              Términos y condiciones
            </a>
          </p>
          <p>
            <a
              href="https://wonderful-wind-37e.notion.site/Pol-tica-de-privacidad-3efe004bd3c94b23869ecb5b45845216"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-white"
            >
              Política de privacidad
            </a>
          </p>
        </div>
      </div>
      <div className="container mb-3 text-white text-center">
        <hr className="border-3 opacity-75" />
        <p>Copyright (c) 2023 Buks</p>
      </div>
    </footer>
  );
}
