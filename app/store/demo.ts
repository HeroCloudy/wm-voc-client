export const useDemoStore = defineStore(
  'demoStore',
  () => {
    const count = ref(0)

    const increment = () => {
      count.value++
    }

    return {
      count,
      increment,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
    },
  },
)
