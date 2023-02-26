import { useAccount, useContractRead, erc20ABI } from "wagmi";
import { BUKS_ADDRESS, USDC } from "../utils/constants";

export const useAllowance = (chainId: number) => {
  const { address, isConnected } = useAccount();
  const {
    data: remaining,
    isError: allowanceError,
    isLoading: waiting,
  } = useContractRead({
    address: USDC[chainId] as `0x${string}`,
    abi: erc20ABI,
    functionName: "allowance",
    args: [address as `0x${string}`, BUKS_ADDRESS[chainId] as `0x${string}`],
  });

  return {
    remainingTokens: parseInt(remaining?._hex as string, 16),
    allowanceError,
  };
};
