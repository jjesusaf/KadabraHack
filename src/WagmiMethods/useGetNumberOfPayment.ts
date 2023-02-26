import { useContractRead } from "wagmi";
import { BUKS_ADDRESS } from "../utils/constants";
import { Buks_Challenge } from "../abis/Challenge";

export const useGetNumberOfPayment = (chainId: number) => {
  let paymentCount: number;
  const {
    data: numOfPayment,
    isError: error,
    isLoading: getting,
  }: any = useContractRead({
    address: BUKS_ADDRESS[chainId] as `0x${string}`,
    abi: Buks_Challenge,
    functionName: "getRealPayment",
    args: [],
  });

  paymentCount = numOfPayment ? numOfPayment : 0;

  console.log(paymentCount);
  return {
    paymentCount,
    error,
  };
};
