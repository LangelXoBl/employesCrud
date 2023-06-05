import type { IEmploye } from '@/models/IEmploye'
import conection from './api'
import { baseAsignation, type IAsignation } from '@/models/IAsignation'

const headers = new Headers()
headers.append('Content-Type', 'application/json')

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

export const getAsignation = async (id: number): Promise<IAsignation> => {
  try {
    const response = await conection(`Empleados/empleadosItemsById?id=${id}`)
    const json: IAsignation[] = await response.json()
    return json[0]
  } catch (error) {
    console.log(error)
    return baseAsignation
  }
}

export const createEmployee = async (employe: IEmploye): Promise<boolean> => {
  try {
    const body = JSON.stringify(employe)
    const response = await conection('Empleados/create', 'POST', body, headers)
    //if(response.headers.get("Content-Type") === "text/plain; charset=utf-8")
    console.log(response.status)
    if (response.status > 200 && response.status < 300) return true
    return false
  } catch (error) {
    console.log('error al crear', error)
    return false
  }
}

export const createAsignation = async (asignation: IAsignation) => {
  try {
    const body = JSON.stringify(asignation)
    console.log(body)
    const res = await conection('api/items/asignar', 'POST', body, headers)
    const json = res.json()
  } catch (error) {
    console.log(error)
  }
}

export const freeAsset = async (status: boolean, id: number) => {
  try {
    const res = await conection(`api/items/StatusItem?status=${status}&id_item=${id}`, 'PUT')
    const json = await res.json()
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}
