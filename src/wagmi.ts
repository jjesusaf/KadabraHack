import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { avalanche, avalancheFuji } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [
    avalanche,
    avalancheFuji,
    ...(process.env.NODE_ENV === "development" ? [avalancheFuji] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Buks",
  chains,
});

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { chains };
