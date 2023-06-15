import makeRequestXML, { xmlTojson, type methodsHTTP } from '@/helpers/api.helper'

const base = import.meta.env.VITE_API_URL
const baseWCF = import.meta.env.VITE_WCF_URL

async function conection(
  path: string,
  method?: methodsHTTP,
  body?: BodyInit,
  headers?: Headers
): Promise<Response> {
  try {
    const data = await fetch(`${base + path}`, { method: method, body: body, headers })
    return data
  } catch (error) {
    throw new Error(`Error en ruta ${path}: ${error}`)
  }
}

export async function conectionWCF(
  tagName: string,
  method: methodsHTTP,
  params?: any
): Promise<any> {
  try {
    const requestOptions = makeRequestXML(tagName, method, params)
    const response = await fetch(baseWCF, requestOptions)
    const xml = await response.text()
    console.log('response', xml)
    const json = xmlTojson(xml, tagName)
    console.log('json res', json)
    return json
  } catch (error) {
    console.log(error)
    return JSON.parse('')
  }
}

export default conection
