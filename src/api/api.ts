const base: string = 'http://www.apisoanet.somee.com/'
type methodsHTTP = "POST" | "GET" | "PUT" | "PATCH" | "DELETE"
//const headers = new Headers()
//headers.append("Content-Type", "application/json")

async function conection(path: string, method?: methodsHTTP, body?: BodyInit, headers?: Headers): Promise<Response> {
  try {
    console.log(headers)
    const data = await fetch(`${base + path}`, { method: method, body: body })
    return data
  } catch (error) {
    throw new Error(`Error en ruta ${path}: ${error}`)
  }
}

export const fetchpost = async (req?: RequestInit) => {
  try {
    const res = await fetch("http://www.apisoanet.somee.com/api/items/create", req)
    const json = await res.json()
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}

export default conection
