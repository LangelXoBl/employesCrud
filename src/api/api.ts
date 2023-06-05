const base = import.meta.env.VITE_API_URL

type methodsHTTP = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

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

export default conection
