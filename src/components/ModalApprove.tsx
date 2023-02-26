import React, { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import confirm from "../public/images/confirm.svg";
import Image from "next/image";
import Snowtrace from "../public/images/Snowtrace.svg";
import { EXPLORER } from "../utils/constants";

const ModalApprove = ({ txSuccess, data, chainId }: any) => {
  const [view, setView] = useState(false);

  useEffect(() => {
    if (txSuccess) {
      setView(txSuccess);
    }
  }, [txSuccess]);

  return (
    <>
      {view ? (
        <div>
          <div className={`${styles.backdrop}`}></div>
          <div className={`${styles.containerModal}`}>
            <div className={`${styles.mod}`} style={{ height: "547px" }}>
              <div style={{ borderBottom: "2px solid #E6E8EC" }}>
                <Image src={confirm} alt="confirm" />
                <div
                  style={{
                    paddingBottom: "10px",
                    paddingTop: "30px",
                    gap: "12px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h1 className={`${styles.modH1}`}>Aprobación exitosa</h1>
                  <p className={`${styles.modP}`}>
                    Ya puedes depositar tus tokens en la plataforma. <br />
                    ¡Recuerda realizar tu depósito para participar!
                  </p>
                </div>
              </div>
              <div style={{ paddingTop: "10px", paddingBottom: "30px" }}>
                <a
                  href={`${EXPLORER[chainId]}/tx/${data?.hash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className={`${styles.modP}`} style={{ margin: "0" }}>
                    Ver la transacción en el explorador
                  </p>

                  <Image src={Snowtrace} alt="Snowtrace" />
                </a>
              </div>
              <button
                className={`${styles.btnAprove}`}
                onClick={() => setView(false)}
              >
                Hecho
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalApprove;
