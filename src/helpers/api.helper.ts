export type methodsHTTP = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

const myHeadersXML = new Headers()
myHeadersXML.append('Content-Type', 'text/xml; charset=utf-8')
myHeadersXML.append('SOAPAction', 'http://tempuri.org/IService/getItems')
myHeadersXML.append('Accept', '*/*')

function makeBodyXML(tagName: string, method: methodsHTTP, params?: any): BodyInit {
  let body
  if (method == 'GET') body = `<${tagName} xmlns="http://tempuri.org/"/>`
  else
    body = `<${tagName} xmlns="http://tempuri.org/">
  ${jsonToXML(params)}
  </${tagName}>
  `

  const bodytXML: BodyInit = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
    ${body}
    </soap:Body>
    </soap:Envelope>`

  console.log('body req', bodytXML)
  return bodytXML
}

export function jsonToXML(object: any): String {
  let xml = ''
  for (const key in object) {
    xml += `<${key}>${object[key]}</${key}>`
  }
  return xml
}

export function xmlTojson(xml: string, tagName: string) {
  const parser = new DOMParser()
  const xmlDOM = parser.parseFromString(xml, 'application/xml')
  const data = xmlDOM.getElementsByTagName(`${tagName}Result`)[0].childNodes[0].nodeValue
  try {
    return JSON.parse(data || '')
  } catch (error) {
    return data
  }
}

export default function makeRequestXML(
  tagName: string,
  method: methodsHTTP,
  params?: any
): RequestInit {
  myHeadersXML.set('SOAPAction', `http://tempuri.org/IService/${tagName}`)
  const request: RequestInit = {
    method: 'POST',
    headers: myHeadersXML,
    body: makeBodyXML(tagName, method, params)
  }

  return request
}
