import type { IEmploye } from '@/models/IEmploye'
import conection, { conectionWCF } from './api'
import { baseAsignation, type IAsignation, type IDetailEmploye } from '@/models/IAsignation'

const headers = new Headers()
headers.append('Content-Type', 'application/json')

export const getListEmployees = async (): Promise<IEmploye[]> => {
  try {
    const json: IEmploye[] = await conectionWCF('getEmployes', 'GET')
    // const data: IEmploye[] = json.map((element: any): IEmploye => {
    //   return {
    //     id: element.Id,
    //     name: element.Name,
    //     lastname: element.Lastname,
    //     curp: element.CURP,
    //     rfc: element.RFC,
    //     email: element.email,
    //     fechaNacimiento: element.FechaNacimiento,
    //     numero_empleado: element.numero_empleado
    //   }
    // })
    // // const response = await conection('api/persona')
    // // const json: IEmploye[] = await response.json()
    return json
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getAsignation = async (id: number): Promise<IAsignation> => {
  try {
    const response = await conection(`api/persona/itemsById?id=${id}`)
    const json: IAsignation[] = await response.json()
    if (json.length == 0) return baseAsignation
    return json[0]
  } catch (error) {
    console.log(error)
    return baseAsignation
  }
}

export const getDetailEmploye = async (id: number): Promise<IDetailEmploye | boolean> => {
  try {
    const data = await conectionWCF('getEmpleadoById', 'POST', { id })
    console.log(data)
    if (data === '') return false

    return data as IDetailEmploye
  } catch (error) {
    console.log(error)
    return false
  }
}

export const createEmployee = async (employe: IEmploye): Promise<boolean> => {
  try {
    const response = await conectionWCF('PostNewEmployee', 'POST', employe)
    //const body = JSON.stringify(employe)
    //const response = await conection('api/persona/create', 'POST', body, headers)
    //if(response.headers.get("Content-Type") === "text/plain; charset=utf-8")
    console.log(response)
    return false
  } catch (error) {
    console.log('error al crear', error)
    return false
  }
}

export const createAsignation = async (asignation: IAsignation) => {
  try {
    const body = JSON.stringify(asignation)
    const res = await conection('api/items/asignar', 'POST', body, headers)
    const res2 = await changeItemStatus(false, asignation.itemId)
    //const json = res.json()
    console.log({ res, res2 })
  } catch (error) {
    console.log(error)
  }
}

export const changeItemStatus = async (status: boolean, id: number) => {
  try {
    const res = await conection(`api/items/StatusItem?status=${status}&id_item=${id}`, 'PUT')
    const json = await res.json()
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}
