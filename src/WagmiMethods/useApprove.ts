import { useCallback } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  erc20ABI,
} from "wagmi";
import { BUKS_ADDRESS, USDC } from "../utils/constants";

export const useApprove = (
  chainId: number = 0,
  maxFeePerGas: any = 0,
  maxPriorityFeePerGas: any = 0
) => {
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: USDC[chainId] as `0x${string}`,
    abi: erc20ABI,
    functionName: "approve",
    args: [BUKS_ADDRESS[chainId] as `0x${string}`, 500000000 as any],
    overrides: {
      maxFeePerGas, // Max fee per gas
      maxPriorityFeePerGas, // Max priority fee per gas
    },
  });

  const {
    data,
    write: approveERC20,
    error,
    isError,
  } = useContractWrite(config);
  const {
    isLoading,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    confirmations: 1,
    hash: data?.hash,
  });

  try {
    useCallback(() => {
      if (approveERC20) {
        approveERC20();
      }
    }, [approveERC20]);
  } catch (error: any) {
    console.log(error);
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
    approveERC20,
  };
};
