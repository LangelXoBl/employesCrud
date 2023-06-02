import type { IEmploye } from '@/models/IEmploye'
import conection from './api'
import type { IAsignation } from '@/models/IAsignation'

const headers = new Headers()
headers.append("Content-Type", "application/json")

export const getListEmployees = async (): Promise<IEmploye[]> => {
  try {
    const response = await conection('Empleados')
    const json: IEmploye[] = await response.json()
    return json
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getAsignation = async (id: number): Promise<IAsignation[]> => {
  try {
    const response = await conection(`Empleados/empleadosItemsById?id=${id}`)
    const json: IAsignation[] = await response.json()
    return json
  } catch (error) {
    console.log(error)
    return []
  }
}

export const createEmployee = async (employe: IEmploye) => {

  try {
    const body = JSON.stringify(employe)
    const response = await conection('Empleador/create', 'POST', body)
    const json = await response.json()
    console.log(json)
  } catch (error) {
    console.log("error al crear", error)
  }

}

