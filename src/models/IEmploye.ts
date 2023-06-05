export interface IEmploye {
  id?: number
  name: string
  lastname: string
  curp: string
  rfc: string
  email: string
  numero_empleado?: number
  fechaNacimiento: string
}

export const baseEmployee: IEmploye = {
  name: '',
  lastname: '',
  curp: '',
  rfc: '',
  email: '',
  fechaNacimiento: new Date().toISOString()
}

export enum TypesForm {
  Create = 'create',
  Edit = 'edit'
}

export type TypeForm = TypesForm
export interface IForm {
  status: boolean
  type?: TypeForm
}
export const baseFormEmployee: IForm = {
  status: false,
  type: TypesForm.Create
}
