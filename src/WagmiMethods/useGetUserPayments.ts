import { useContractRead, useAccount } from "wagmi";
import { BUKS_ADDRESS } from "../utils/constants";
import { Buks_Challenge } from "../abis/Challenge";

export const useGetUserPayments = (chainId: number) => {
  let userPaymentCount: number;
  const { address, isConnected } = useAccount();
  const {
    data: availableSavings,
    isError: error,
    isLoading: gettingAvailableSavings,
  }: any = useContractRead({
    address: BUKS_ADDRESS[chainId] as `0x${string}`,
    abi: Buks_Challenge,
    functionName: "getUserAvailableSavings",
    args: [address],
  });

  const {
    data: savings,
    isError: errorSavings,
    isLoading: gettingSavings,
  }: any = useContractRead({
    address: BUKS_ADDRESS[chainId] as `0x${string}`,
    abi: Buks_Challenge,
    functionName: "saveAmount",
    args: [],
  });

  userPaymentCount =
    parseInt(availableSavings._hex, 16) / parseInt(savings._hex, 16);

  return {
    userPaymentCount,
    error,
    errorSavings,
  };
};
