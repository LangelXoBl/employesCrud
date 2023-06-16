import type { IAsset } from './IAsset'
import type { IEmploye } from './IEmploye'

export interface IAsignation {
  id?: number
  id_persona: number
  itemId: number
  dia_asignacion: Date
  dia_entrega: Date
  dia_liberacion?: Date
  persona?: IEmploye
  items?: IAsset
}

export const baseAsignation: IAsignation = {
  itemId: 0,
  id_persona: 0,
  dia_asignacion: new Date(),
  dia_entrega: new Date()
}

export interface IDetailEmploye {
  persona: IEmploye
  itemEmpleadoDetail?: IAsignationV2[]
}

export interface IAsignationV2 {
  id?: number
  id_asignacion: number
  nombre: string
  descripcion: string
  fechaAsignacion: Date
  fechaEntrega: Date
  fechaLiberacion?: Date
}
