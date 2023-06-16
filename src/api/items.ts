import type { IAsset } from '@/models/IAsset'
import { conectionWCF } from './api'

export const getListAssets = async (): Promise<IAsset[]> => {
  try {
    const json: IAsset[] = await conectionWCF('getItems', 'GET')
    // const data: IAsset[] = json.map((element: any): IAsset => {
    //   return {
    //     id: element.id,
    //     nombreItem: element.NombreItem,
    //     description: element.Description,
    //     status: element.status
    //   }
    // })
    //// const response = await conection('api/items')
    //// const json: IAsset[] = await response.json()
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

export const updateAsset = async (asset: IAsset) => {
  const data = {
    id: asset.id,
    nombreitem: asset.nombreItem,
    description: asset.description,
    status: asset.status
  }
  const res = await conectionWCF('PutItem', 'POST', data)
  console.log('res edit item', res)
}

export const deleteAsset = async (id: Number): Promise<boolean> => {
  try {
    const status: boolean = await conectionWCF('DeleteItem', 'POST', { id })
    console.log(status)
    return status
  } catch (error) {
    console.log(error)
    return false
  }
}
