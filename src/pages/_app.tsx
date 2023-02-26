import "@rainbow-me/rainbowkit/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import { WagmiConfig } from "wagmi";

import { chains, client } from "../wagmi";
import { NavigationBar } from "../components/Navbar";
import { Footer } from "../components/Footer";


function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        coolMode
        theme={lightTheme({
          accentColor: "#4F4F4F",
          overlayBlur: "small",
          borderRadius: "medium",
        })}
      >
        <NextHead>
          <title>Buks</title>
        </NextHead>

        <NavigationBar />
        <div className="container">
          {mounted && <Component {...pageProps} />}
        </div>
        <Footer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
