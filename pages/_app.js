import "../styles/globals.css"
import React from 'react'
import { Layout } from "../components/Layout"
import { ThemeProvider } from "next-themes"

import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import { Provider, chain, defaultChains, createWagmiClient } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient())

  // // API key for Ethereum node
  // const AlchemyId = process.env.ALCHEMYKEY
  // // Chains for connectors to support
  // const chains = defaultChains
  // // Set up connectors
  // const connectors = ({ chainId }) => {
  //   const rpcUrl = chains.find(x => x.id === chainId)?.rpcUrls?.[0] ?? chain.mainnet.rpcUrls[0]
  //   return [
  //     new InjectedConnector({ chains }),
  //     new WalletConnectConnector({
  //       options: {
  //         AlchemyId,
  //         qrcode: true,
  //       },
  //     }),
  //     new WalletLinkConnector({
  //       options: {
  //         appName: "baby dao",
  //         jsonRpcUrl: `${rpcUrl}/${AlchemyId}`,
  //       },
  //     }),
  //   ]
  // }

  // API key for Ethereum node
// Two popular services are Alchemy (alchemy.com) and Infura (infura.io)
const AlchemyId = process.env.ALCHEMYKEY

const chains = defaultChains
const defaultChain = chain.mainnet

// Set up connectors
const wagmiClient = createWagmiClient({
  autoConnect: true,
  connectors({ chainId }) {
    const chain = chains.find((x) => x.id === chainId) ?? defaultChain
    const rpcUrl = chain.rpcUrls.alchemy
      ? `${chain.rpcUrls.alchemy}/${AlchemyId}`
      : chain.rpcUrls.default
    return [
      new InjectedConnector(),
      new CoinbaseWalletConnector({
        options: {
          appName: 'wagmi',
          chainId: chain.id,
          jsonRpcUrl: rpcUrl,
        },
      }),
      new WalletConnectConnector({
        options: {
          qrcode: true,
          rpc: {
            [chain.id]: rpcUrl,
          },
        },
      }),
    ]
  },
})

  return (
    <ThemeProvider attribute="class">
      <Provider client={wagmiClient}>
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
