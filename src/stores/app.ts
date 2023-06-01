import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const drawer: Ref<boolean> = ref(false)
  return { drawer }
})
