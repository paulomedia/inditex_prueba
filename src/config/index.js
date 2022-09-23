const DELAY_TIME = 60 * 60 * 1000;

const config = {
  products: {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    // 1 hora para volver a realizar la petición para actualizar
    refetchInterval: DELAY_TIME,
    // 1 hora tiempo de cache
    cacheTime: DELAY_TIME,
  },
};

export default config;
