export interface IAsset {
  id?: number
  nombreItem: string
  description?: string
  status: boolean
}

export const baseAsset: IAsset = {
  nombreItem: '',
  status: true
}
