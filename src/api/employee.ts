import type { IEmploye } from '@/models/IEmploye'
import conection from './api'
import type { IAsignation } from '@/models/IAsignation'

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
