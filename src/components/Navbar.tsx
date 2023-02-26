import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Kadabra from "../public/images/Kadabra.svg";
import styles from "../styles/Navbar.module.css";
import Vector from '../public/images/Vector.svg'
import { useState } from "react";

export function NavigationBar() {

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Navbar bg="dark" className={styles.navBucks}>
          <div>
            <Image src={Kadabra} alt="Bucks Logo" width={180} height={55} />
          </div>
          <div        
            className={`${toggle ? '' : styles.navBuckss2} ${styles.navBuckss}`}           
          >
            <div className={styles.centerNav}>
              <li>
                <Nav.Link
                  href="/"
                  className={`rounded-3 fw-bold text-center text-light`}
                  style={{
                    background:
                    'linear-gradient(93.63deg, #484848 5.36%, rgba(72, 72, 72, 0.36) 47.78%, #484848 91.69%)', padding:'.5rem',
                    width:'100px'
                  }}
                  active
                >
                  Retos
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  href="/leaders"
                  className="rounded-3 fw-semibold"
                  disabled
                >
                  Tabla de lideres
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  href="/my-challenges"
                  className="rounded-3 fw-semibold"
                  disabled
                >
                  Mis retos
                </Nav.Link>
              </li>
            </div>
            <div>
              <ConnectButton
                label="CONECTA BILLETERA"
                chainStatus="icon"
                showBalance={{ smallScreen: false }}
              />
            </div>
          </div>
          <div className={styles.menuNav}>
            <Image src={Vector} alt='Menú' onClick={() => setToggle(!toggle)}/>
          </div>
      </Navbar>
    </>
  );
}
