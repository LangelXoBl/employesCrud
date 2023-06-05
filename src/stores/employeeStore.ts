import { defineStore } from 'pinia'
import {
  baseEmployee,
  baseFormEmployee,
  TypesForm,
  type IEmploye,
  type IForm,
  type TypeForm
} from '@/models/IEmploye'
import { ref, type Ref } from 'vue'
import { createEmployee, freeAsset, getAsignation, getListEmployees } from '@/api/employee'
import { baseRegister, type IAsignation } from '@/models/IAsignation'

export const useEmployeeStore = defineStore('employee', () => {
  //  State
  const employee: Ref<IEmploye> = ref(baseEmployee)
  const register: Ref<IAsignation> = ref(baseRegister)
  const employeeList: Ref<IEmploye[]> = ref([])
  const formEmployee: Ref<IForm> = ref(baseFormEmployee)

  // getters

  //actions
  async function openForm(employe: IEmploye, type: TypeForm) {
    employee.value = employe
    if (type === TypesForm.Edit) await fetchDetail()
    formEmployee.value = { status: true, type } //se abre el modal
  }
  function closeForm() {
    employee.value = baseEmployee
    formEmployee.value.status = false
  }

  async function fetchEmployees() {
    employeeList.value = await getListEmployees()
  }

  async function fetchDetail() {
    register.value = await getAsignation(employee.value.id!)
  }

  async function newEmployee() {
    console.log('new employee', employee.value)
    const status = await createEmployee(employee.value)
    console.log(status)
    if (status) fetchEmployees()
  }

  async function newRegister() {}

  async function liberarAsset() {
    await freeAsset(!register.value.items!.status, register.value.items!.id!)
  }

  return {
    formEmployee,
    employee,
    register,
    employeeList,
    fetchEmployees,
    fetchDetail,
    newEmployee,
    newRegister,
    liberarAsset,
    openForm,
    closeForm
  }
})
