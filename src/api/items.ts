import type { IAsset } from '@/models/IAsset'
import { conectionWCF } from './api'

export const getListAssets = async (): Promise<IAsset[]> => {
  try {
    const json = await conectionWCF('getItems', 'GET')
    const data: IAsset[] = json.map((element: any): IAsset => {
      return {
        id: element.id,
        nombreItem: element.NombreItem,
        description: element.Description,
        status: element.status
      }
    })
    // const response = await conection('api/items')
    // const json: IAsset[] = await response.json()
    return data
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
      nombreItem: asset.nombreItem,
      description: asset.description!,
      status: asset.status
    }
    const response = await conectionWCF('PostNewItem', 'POST', data)
    // const body = JSON.stringify(data)
    // const response = await conection('api/items/create', 'POST', body, headers)
    // console.log(await response.body)
    const json = await response.json()
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}
