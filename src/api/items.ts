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

// const headers = new Headers()
// headers.append("Content-Type", "application/json")
// headers.append("Accept", "*/*")
// headers.append("Accept-Encoding", " gzip, deflate")
// headers.append("Accept-Language", "es-419,es;q=0.9")
// headers.append("Connection", "keep-alive")
// headers.append("Host", "www.apisoanet.somee.com")
// headers.append("Origin", "http://localhost:5173")



export const createAsset = async (asset: IAsset) => {
  try {
    const body = JSON.stringify(asset)
    const response = await conection("api/items/create", "POST", body)
    const json = await response.json()
    console.log(json);
  } catch (error) {
    console.log(error)
  }
}