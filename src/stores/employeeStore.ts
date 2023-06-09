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
import {
  createAsignation,
  createEmployee,
  changeItemStatus,
  getAsignation,
  getListEmployees,
  getDetailEmploye
} from '@/api/employee'
import { baseAsignation, type IAsignation, type IDetailEmploye } from '@/models/IAsignation'

export const useEmployeeStore = defineStore('employee', () => {
  //  State
  const employee: Ref<IEmploye> = ref(baseEmployee)
  const asignation: Ref<IAsignation> = ref(baseAsignation)
  const employeeList: Ref<IEmploye[]> = ref([])
  const formEmployee: Ref<IForm> = ref(baseFormEmployee)
  const loadingDetail: Ref<boolean> = ref(false)
  const detail: Ref<IDetailEmploye> = ref({ persona: baseEmployee })

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
    loadingDetail.value = true
    const res = await getDetailEmploye(employee.value.id!)
    console.log('res detail', res)
    if (typeof res != 'boolean') detail.value = res
    // asignation.value = await getAsignation(employee.value.id!)
    loadingDetail.value = false
  }

  async function newEmployee() {
    console.log('new employee', employee.value)
    const status = await createEmployee(employee.value)
    console.log(status)
    if (status) fetchEmployees()
  }

  async function newRegister() {
    await createAsignation(asignation.value)
  }

  async function liberarAsset() {
    await changeItemStatus(asignation.value.items!.status, asignation.value.items!.id!)
  }

  return {
    formEmployee,
    employee,
    detail,
    asignation,
    employeeList,
    loadingDetail,
    fetchEmployees,
    fetchDetail,
    newEmployee,
    newRegister,
    liberarAsset,
    openForm,
    closeForm
  }
})
