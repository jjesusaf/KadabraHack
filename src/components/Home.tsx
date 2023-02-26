import Head from "next/head";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { CardInfo } from "./CardInfo";
import styles from "../styles/Home.module.css";


export function Home() {

  return (
    <>
      <div style={{ marginTop: '5rem' }}>
        <h3 className={styles.challenges}>
          AHORRO
        </h3>
        <h1 className={`${styles.header} fw-bolder`}>
          Explorar retos de ahorro y participa para ganar premios
        </h1>
      </div>
      <div className="d-flex justify-content-center">
        <Nav
          variant="pills"
          className={`${styles.challengesStatus} ${styles.nav} shadow`}
          fill
          aria-label="SubMenu"
        >
          <Nav.Item>
            <Nav.Link
              href="/"
              className="rounded-3"
              style={{
                height: "42px",
                marginTop: "0.1rem",
                paddingTop: "0.7rem",
                marginLeft: "3px",
                marginRight: "3px",
                background:
                  "linear-gradient(93.63deg, #484848 5.36%, rgba(72, 72, 72, 0.36) 47.78%, #484848 91.69%)",
                color: 'white',
              }}
              active
            >
              Abiertos / Disponibles
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/my-challenges" className="rounded-4 mt-1" disabled>
              Terminados
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <CardInfo />
      <div className={styles.pChallenge}>
        <div className={`col-7 ${styles.applicate1} `}>
          <span className={styles.label}>¿Quieres proponer un reto?</span>
        </div>
        <div className="">
          <Button
            style={{
              width: "100%",
              display: 'flex',
              height: "100%",
              background: "#4F4F4F",
              border: "1px solid",
            }}
            href="https://www.buks.app/postular-reto"
            target="_blank"
          >
            APLICA AHORA
          </Button>
        </div>
      </div>
    </>
  );
}
