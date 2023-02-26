import { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "../styles/Card.module.css";

import { useNetwork } from "wagmi";
import { useAddPayment } from "../WagmiMethods";
import ModalError from "./ModalError";
import ModalDeposit from "./ModalDeposit";
import ModalProcessing from "./ModalProcessing";

export function DepositBtn({ maxFeePerGas, maxPriorityFeePerGas }: any) {
  const { chain } = useNetwork();
  const chainId = chain ? chain.id : 43113;
  const [view, setView] = useState(false);
  const {
    isLoading,
    txSuccess,
    txError,
    isPrepareError,
    prepareError,
    isError,
    error,
    data,
    addPayment,
  } = useAddPayment(chainId, maxFeePerGas, maxPriorityFeePerGas);

  // TODO: Get user deposits
  // TODO: Get challenge amount

  return (
    <>
      <Button
        className={styles.approveButton}
        disabled={isLoading}
        onClick={() => setView(!view)}
      >
        {isLoading ? "DEPOSITANDO..." : "DEPOSITAR $5 USDC"}
      </Button>
      {view && (
        <ModalDeposit
          data={data}
          addPayment={addPayment}
          txSuccess={txSuccess}
          chainId={chainId}
        />
      )}

      {isLoading && <ModalProcessing />}

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
