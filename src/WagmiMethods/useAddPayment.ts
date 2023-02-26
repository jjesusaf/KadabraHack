import { useCallback } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { BUKS_ADDRESS } from "../utils/constants";
import { Buks_Challenge } from "../abis/Challenge";

export const useAddPayment = (
  chainId: number,
  maxFeePerGas: any,
  maxPriorityFeePerGas: any
) => {
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: BUKS_ADDRESS[chainId] as `0x${string}`,
    abi: Buks_Challenge,
    functionName: "addPayment",
    args: [],
    overrides: {
      maxFeePerGas, // Max fee per gas
      maxPriorityFeePerGas, // Max priority fee per gas
    },
  });

  const { data, write: addPayment, error, isError } = useContractWrite(config);
  const {
    isLoading,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    confirmations: 1,
    hash: data?.hash,
  });
  // console.log("-->>  ", { txError });
  // console.log(">> ", { error });

  try {
    useCallback(() => {
      if (addPayment) {
        // console.log({ data, addPayment });
        addPayment();
      }
    }, [addPayment]);
  } catch (error) {
    console.log("[ERROR !!] ", error);
  }

  return {
    isLoading,
    txSuccess,
    txError,
    isPrepareError,
    prepareError,
    isError,
    error,
    data,
    addPayment,
  };
};
