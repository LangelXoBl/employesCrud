import type { IAsset } from '@/models/IAsset'
import conection from './api'

export const getListAssets = async (): Promise<IAsset[]> => {
  try {
    const response = await conection('api/items')
    const json: IAsset[] = await response.json()
    return json
  } catch (error) {
    console.log(error)
    return []
  }
}
