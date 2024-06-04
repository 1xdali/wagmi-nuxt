import { http, UseWagmiPlugin, createConfig } from 'use-wagmi'
import { celo, mainnet, optimism, sepolia } from 'use-wagmi/chains'
import { coinbaseWallet, walletConnect } from 'use-wagmi/connectors'

export default defineNuxtPlugin((nuxt) => {
  const runtimeConfig = useRuntimeConfig()

  const config = createConfig({
    chains: [mainnet, sepolia, optimism, celo],
    ssr: true,
    connectors: [
      walletConnect({
        projectId: "3a234c18909fd976641bcc6f18c13d14",
      }),
      coinbaseWallet({ appName: 'Vite Vue Playground', darkMode: true }),
    ],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
      [optimism.id]: http(),
      [celo.id]: http(),
    },
  })

  nuxt.vueApp.use(UseWagmiPlugin, { config })
})