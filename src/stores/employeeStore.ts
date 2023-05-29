import { defineStore } from "pinia";
import { type IEmploye } from "@/models/IEmploye";
import { ref, type Ref } from "vue";
import { getListEmployees } from "@/api/employee";
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
    const employeeList: Ref<IEmploye[]> = ref([])
    // getters

    //actions
    async function fetchEmployees() {
        employeeList.value = await getListEmployees()
    }

    return { employee, employeeList, fetchEmployees }
})