const config = {
  products: {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: 60*60*1000 // 1 hora para volver a realizar la petición para actualizar
  }
}

export default config