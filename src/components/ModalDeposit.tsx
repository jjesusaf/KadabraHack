import { useState } from "react";
import styles from "../styles/Modal.module.css";
import Wallet from "../public/images/place.svg";
import Image from "next/image";
import ModalDepApprove from "./ModalDepApprove";
import Cancel from '../public/images/Cancel.svg';

const ModalDeposit = ({ addPayment, data, txSuccess, chainId }: any) => {
  const [view, setView] = useState(true);

  const deposit = () => {
    try {
      if (addPayment) {
        setView(!view);
        addPayment();
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      {view && !txSuccess && (
        <div>
          <div className={`${styles.backdrop}`}></div>
          <div className={`${styles.containerModal}`}>
            <div className={`${styles.mod}`} style={{ height: "597px" }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <h1
                    className={`${styles.modH1}`} style={{ textAlign: "left" }}>
                    Depositar
                  </h1>
                  <Image src={Cancel} alt="Wallet" onClick={() => setView(false)}/>
                </div>
                <p className={`${styles.modP}`} style={{ textAlign: "left" }}>
                  Estas por entrar a un reto de ahorro. Si fallas un depósito no
                  recibirás APY del período.
                </p>
                <div
                  style={{
                    paddingBottom: "10px",
                    paddingTop: "20px",
                    gap: "12px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Image src={Wallet} alt="Wallet" />
                </div>
              </div>
              <div
                className={`${styles.modDeposit}`}
                style={{
                  paddingTop: "25px",
                  paddingBottom: "20px",
                  borderBottom: "2px solid #E6E8EC",
                }}
              >
                <div>
                  <p className={`${styles.modP}`} style={{ margin: "0" }}>
                    Premio para ganadores
                  </p>
                </div>
                <div>
                  <p
                    className={`${styles.modP}`}
                    style={{ margin: "0", color: "black", fontWeight: "bold" }}
                  >
                    2 AVAX
                  </p>
                </div>
              </div>
              <div
                className={`${styles.modDeposit}`}
                style={{ paddingTop: "5px", paddingBottom: "20px" }}
              >
                <div>
                  <p className={`${styles.modP}`} style={{ margin: "0" }}>
                    APY aproximado
                  </p>
                </div>
                <div>
                  <p
                    className={`${styles.modP}`}
                    style={{ margin: "0", color: "black", fontWeight: "bold" }}
                  >
                    4.5%
                  </p>
                </div>
              </div>
              <div
                className={`${styles.modDeposit}`}
                style={{ paddingTop: "5px", paddingBottom: "30px" }}
              >
                <div>
                  <p className={`${styles.modP}`} style={{ margin: "0" }}>
                    Total a depositar
                  </p>
                </div>
                <div>
                  <p
                    className={`${styles.modP}`}
                    style={{
                      margin: "0",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    10 USDC
                  </p>
                </div>
              </div>
              <button
                className={`${styles.btnAprove}`}
                onClick={() => deposit()}
              >
                Depositar
              </button>
            </div>
          </div>
        </div>
      )}
      {!view && txSuccess && (
        <ModalDepApprove data={data} txSuccess={txSuccess} chainId={chainId} />
      )}
    </>
  );
};

export default ModalDeposit;
