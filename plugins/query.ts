import { persistQueryClient } from '@tanstack/query-persist-client-core'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { deserialize, serialize } from 'use-wagmi'

export default defineNuxtPlugin((nuxt) => {
  // Initialize VueQueryPlugin with default queryClientConfig
  nuxt.vueApp.use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          gcTime: 1_000 * 60 * 60 * 24, // 24 hours
          networkMode: 'offlineFirst',
          refetchOnWindowFocus: false,
          retry: 0,
        },
        mutations: { networkMode: 'offlineFirst' },
      },
    },
  })

  // Perform client-side only persistence
  if (process.client) {
    const queryClient = nuxt.vueApp._context.provides['__QUERY_CLIENT']
    if (queryClient) {
      persistQueryClient({
        queryClient,
        persister: createSyncStoragePersister({
          key: 'vite-vue.cache',
          serialize,
          storage: window.localStorage,
          deserialize,
        }),
      })
    }
  }
})
