import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'




export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  const changes = ref(0)

  const history: Ref<change[]> = ref([])
  // Getters
  const doubleCount = computed(() => count.value * 2)
  // Actions
  function increment(): void {
    count.value++
    changed("increment")
  }
  function decrement(): void {
    count.value--
    changed("decrement")
  }
  const changed = (type: string) => {
    changes.value++
    history.value.push({ type })
  }


  return { count, changes, history, doubleCount, increment, decrement }
})

interface change {
  type: String,
}
