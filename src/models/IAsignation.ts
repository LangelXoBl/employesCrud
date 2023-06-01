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
