import Button from "react-bootstrap/Button";
import styles from "../styles/Card.module.css";

import { useNetwork } from "wagmi";
import { useWithdraw } from "../WagmiMethods";
import ModalError from "./ModalError";
import ModalWithdraw from "./ModalWithdraw";
import { useState } from "react";
import ModalWithdAprove from "./ModalWithdAprove";
export function WithdrawBtn({ maxFeePerGas, maxPriorityFeePerGas }: any) {
  const { chain } = useNetwork();
  const chainId = chain ? chain.id : 43113;
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);
  const {
    isLoading,
    txSuccess,
    txError,
    isPrepareError,
    prepareError,
    isError,
    error,
    data,
    withdraw,
  } = useWithdraw(chainId, maxFeePerGas, maxPriorityFeePerGas);

  console.log({ isPrepareError, prepareError });

  const withdrawFunds = () => {
    console.log("Withdraw");
    try {
      if (withdraw) {
        console.log({ data, withdraw });
        withdraw();
      }
    } catch (error: any) {
      console.log(error);
    }

    setView(!view);
    setView2(!view2);
  };

  // TODO: Get user deposits

  return (
    <>
      <Button
        className={styles.approveButton}
        disabled={isLoading}
        onClick={() => withdrawFunds()}
      >
        {isLoading ? "Retirando..." : "Retirar"}
      </Button>
      {view && view2 && <ModalWithdAprove />}
      {view || txSuccess ? <ModalWithdraw /> : null}
      {view ||
        (txSuccess && (
          /*<div>
          Retiro Exitoso!
          <div>
            <a
              href={`https://testnet.snowtrace.io/tx/${data?.hash}`}
              target="_blank"
              rel="noreferrer"
            >
              Snowtrace
            </a>
          </div>
        </div> */
          <ModalWithdraw />
        ))}
      {(isPrepareError || isError) && (
        <ModalError
          isPrepareError={isPrepareError}
          prepareError={prepareError}
          isError={isError}
          error={error}
          txError={txError}
        />
      )}
    </>
  );
}
