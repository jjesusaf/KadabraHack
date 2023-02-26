import React, { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import Image from "next/image";
import Error from "../public/images/advertencia.png";

const ModalError = ({
  isPrepareError,
  prepareError,
  isError,
  error,
  txError,
}: any) => {
  const [view, setView] = useState(false);
  const [reasonError, setReasonError] = useState<any>({});

  useEffect(() => {
    if (isPrepareError || isError) {
      setView(isPrepareError);
      setReasonError(prepareError || error);
    }
  }, [error, isError, isPrepareError, prepareError]);

  return (
    <>
      {view ? (
        <div>
          <div className={`${styles.backdrop}`}></div>
          <div className={`${styles.containerModal}`}>
            <div className={`${styles.mod}`} style={{ height: "547px" }}>
              <div style={{ borderBottom: "2px solid #E6E8EC" }}>
                <Image
                  style={{
                    objectFit: "contain",
                    aspectRatio: "3/2",
                    width: "50%",
                    height: "50%",
                  }}
                  src={Error}
                  alt="confirm"
                />
                <div
                  style={{
                    paddingBottom: "10px",
                    paddingTop: "30px",
                    gap: "12px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h1 className={`${styles.modH1}`}>ERROR</h1>
                  <p
                    className={`${styles.modP}`}
                    style={{ fontSize: "24px", fontWeight: "bold" }}
                  >
                    {reasonError?.reason}
                  </p>
                </div>
              </div>
              <div style={{ paddingTop: "10px", paddingBottom: "30px" }}></div>
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

export default ModalError;
