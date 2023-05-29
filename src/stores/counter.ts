import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { type IEmploye } from '@/models/IEmploye'
import conection from '@/api/api'



export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  const changes = ref(0)
  const employe: Ref<IEmploye> = ref(
    {
      name: '',
      lastName: '',
      curp: '',
      rfc: '',
      email: '',
      fechaNacimiento: new Date()
    }
  )
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

  async function getListEmployees() {
    const data: IEmploye[] = await getEmployees();
    employe.value = data[0];

  }

  async function getEmployees(): Promise<IEmploye[]> {
    try {
      const data = await conection("Empleados")
      const json: IEmploye[] = await data.json()
      return json
    } catch (error) {
      console.log(error)
      return []
    }
  }
  return { count, changes, history, employe, doubleCount, increment, decrement, getListEmployees }
})

interface change {
  type: String,
}
