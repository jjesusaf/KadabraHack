import { useContractRead } from "wagmi";
import { BUKS_ADDRESS } from "../utils/constants";
import { Buks_Challenge } from "../abis/Challenge";

export const useGetUsers = (chainId: number) => {
  let usersCount: any;
  const {
    data: numOfUsers,
    isError: usersError,
    isLoading: getting,
  }: any = useContractRead({
    address: BUKS_ADDRESS[chainId] as `0x${string}`,
    abi: Buks_Challenge,
    functionName: "getUserCount",
    args: [],
  });

  usersCount = numOfUsers ? parseInt(numOfUsers._hex, 16) : 0;

  return {
    usersCount,
    usersError,
  };
};
