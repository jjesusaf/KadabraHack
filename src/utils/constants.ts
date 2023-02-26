const USDC_FUJI = "0x6a17716Ce178e84835cfA73AbdB71cb455032456"; // "0x6a17716Ce178e84835cfA73AbdB71cb455032456"; // Aave
const USDC_AVALANCHE = "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E";

const BUKS_FUJI = "0x6b73e22ED56a03bb9914c86f4b9f0c8A80A1b432"; // "0x37Fe4591169bF2Ced2002B148c6D669CF887CE7D";
const BUKS_AVALANCHE = "0x000000";

export const BUKS_ADDRESS: { [key: number]: string } = {
  43113: BUKS_FUJI,
  43114: BUKS_AVALANCHE,
};

export const USDC: { [key: number]: string } = {
  43113: USDC_FUJI,
  43114: USDC_AVALANCHE,
};

export const HOST: { [key: number]: string } = {
  43113: "api.avax-test.network",
  43114: "api.avax.network",
};

export const EXPLORER: { [key: number]: string } = {
  43113: "https://testnet.snowtrace.io",
  43114: "https://snowtrace.io",
};
