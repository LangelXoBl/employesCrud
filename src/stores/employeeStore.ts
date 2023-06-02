import { defineStore } from 'pinia'
import { type IEmploye } from '@/models/IEmploye'
import { ref, type Ref } from 'vue'
import { createEmployee, freeAsset, getAsignation, getListEmployees } from '@/api/employee'
import { baseRegister, type IAsignation } from '@/models/IAsignation'
export const baseEmployee: IEmploye = {
  name: '',
  lastname: '',
  curp: '',
  rfc: '',
  email: '',
  fechaNacimiento: new Date().toISOString()
}

export const useEmployeeStore = defineStore('employee', () => {
  //  State
  const employee: Ref<IEmploye> = ref(baseEmployee)
  const register: Ref<IAsignation> = ref(baseRegister)
  const employeeList: Ref<IEmploye[]> = ref([])
  const formEmployee: Ref<boolean> = ref(false)
  // getters

  //actions
  async function fetchEmployees() {
    employeeList.value = await getListEmployees()
  }

  async function fetchDetail() {
    register.value = await getAsignation(employee.value.id!)
  }

  async function newEmployee() {
    await createEmployee(employee.value)
  }

  async function newRegister() {

  }

  async function liberarAsset() {
    await freeAsset(!register.value.items!.status, register.value.items!.id!)
  }

  return { formEmployee, employee, register, employeeList, fetchEmployees, fetchDetail, newEmployee, newRegister, liberarAsset }
})
