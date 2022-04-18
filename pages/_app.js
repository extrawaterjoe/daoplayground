import "../styles/globals.css"
import { Layout } from "../components/Layout"
import { ThemeProvider } from "next-themes"

import { Provider, chain, defaultChains } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"
import { WalletLinkConnector } from "wagmi/connectors/walletLink"

function MyApp({ Component, pageProps }) {
  // API key for Ethereum node
  const AlchemyId = process.env.ALCHEMYKEY
  // Chains for connectors to support
  const chains = defaultChains
  // Set up connectors
  const connectors = ({ chainId }) => {
    const rpcUrl = chains.find(x => x.id === chainId)?.rpcUrls?.[0] ?? chain.mainnet.rpcUrls[0]
    return [
      new InjectedConnector({ chains }),
      new WalletConnectConnector({
        options: {
          AlchemyId,
          qrcode: true,
        },
      }),
      new WalletLinkConnector({
        options: {
          appName: "baby dao",
          jsonRpcUrl: `${rpcUrl}/${AlchemyId}`,
        },
      }),
    ]
  }

  return (
    <ThemeProvider attribute="class">
      <Provider autoConnect connectors={connectors}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
