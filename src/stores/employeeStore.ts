import { defineStore } from 'pinia'
import { type IEmploye } from '@/models/IEmploye'
import { ref, type Ref } from 'vue'
import { getAsignation, getListEmployees } from '@/api/employee'
import type { IAsignation } from '@/models/IAsignation'
const baseEmployee: IEmploye = {
  name: '',
  lastname: '',
  curp: '',
  rfc: '',
  email: '',
  fechaNacimiento: new Date()
}

export const useEmployeeStore = defineStore('employee', () => {
  //  State
  const employee: Ref<IEmploye> = ref(baseEmployee)
  const register: Ref<IAsignation[]> = ref([])
  const employeeList: Ref<IEmploye[]> = ref([])
  const formEmployee: Ref<boolean> = ref(false)
  // getters

  //actions
  async function fetchEmployees() {
    employeeList.value = await getListEmployees()
  }

  async function fetchDetail() {
    formEmployee.value = true
    register.value = await getAsignation(employee.value.id!)
    console.log(register.value)
  }

  return { formEmployee, employee, register, employeeList, fetchEmployees, fetchDetail }
})
