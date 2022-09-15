const config = {
  products: {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchInterval: 60 * 60 * 1000, // 1 hora para volver a realizar la petición para actualizar
    cacheTime: 60 * 60 * 1000,
  },
};

export default config;
