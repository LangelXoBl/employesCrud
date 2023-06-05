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

const headers = new Headers()
headers.append('Content-Type', 'application/json')

export const createAsset = async (asset: IAsset) => {
  try {
    const data = {
      id: 0,
      description: asset.description!,
      nombreItem: asset.nombreItem,
      status: asset.status
    }
    const body = JSON.stringify(data)
    const response = await conection('api/items/create', 'POST', body, headers)
    console.log(await response.body)
    const json = await response.json()
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}
