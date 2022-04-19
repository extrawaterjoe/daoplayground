import "../styles/globals.css"
import React from 'react'
import { Layout } from "../components/Layout"
import { ThemeProvider } from "next-themes"

import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import { Provider, chain, defaultChains } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"
import { WalletLinkConnector } from "wagmi/connectors/walletLink"

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

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
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </Layout>
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
