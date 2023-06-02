import type { IAsset } from './IAsset'
import type { IEmploye } from './IEmploye'

export interface IAsignation {
  id?: number
  id_persona: number
  id_item: number
  dia_asignacion: Date
  dia_entrega: Date
  dia_liberacion?: Date
  persona?: IEmploye
  items?: IAsset
}

export const baseRegister: IAsignation = {
  id_item: 0,
  id_persona: 0,
  dia_asignacion: new Date(),
  dia_entrega: new Date()
}