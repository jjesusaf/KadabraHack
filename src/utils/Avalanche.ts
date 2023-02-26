import { Avalanche } from "avalanche";
import { ethers } from "ethers";
import { HOST } from "./constants";

export const avalancheInstance = (chainId: number = 43113) => {
  const avalanche = new Avalanche(HOST[chainId], undefined, "https", chainId);
  const cchain = avalanche.CChain();
  return cchain;
};

export const calcFeeData = async (chainId: number) => {
  try {
    if (chainId === 43113 || chainId === 43114) {
      const cChain = avalancheInstance(chainId);
      let maxFeePerGas = 0;
      const baseFeeResponse = await cChain.getBaseFee();
      const baseFee: number = parseInt(baseFeeResponse, 16) / 1e9;

      const maxPriorityFeePerGasResponse =
        await cChain.getMaxPriorityFeePerGas();
      const maxPriorityFeePerGas =
        parseInt(maxPriorityFeePerGasResponse, 16) / 1e9;

      if (baseFee >= 0 && maxPriorityFeePerGas >= 0) {
        maxFeePerGas = baseFee + maxPriorityFeePerGas;
      }

      if (maxFeePerGas < maxPriorityFeePerGas) {
        throw "Error: Max fee per gas cannot be less than max priority fee per gas";
      }

      const maxFeePerGasFormatted = ethers.utils.parseUnits(
        maxFeePerGas.toString(),
        "gwei"
      );
      const maxPriorityFeePerGasFormatted = ethers.utils.parseUnits(
        maxPriorityFeePerGas.toString(),
        "gwei"
      );
      console.log("Avalanche ", {
        maxFeePerGasFormatted,
        maxPriorityFeePerGasFormatted,
      });
      return {
        maxFeePerGas: maxFeePerGasFormatted,
        maxPriorityFeePerGas: maxPriorityFeePerGasFormatted,
      };
    }
  } catch (error) {
    console.log("[ERROR !!] ", error);
  }
};
