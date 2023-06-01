const base: string = 'http://www.apisoanet.somee.com/'

async function conection(path: string, method?: string, body?: BodyInit): Promise<Response> {
  try {
    const data = await fetch(`${base + path}`, { method, body })
    return data
  } catch (error) {
    throw new Error(`Error en ruta ${path}: ${error}`)
  }
}

export default conection
