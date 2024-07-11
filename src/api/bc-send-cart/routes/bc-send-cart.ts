export default {
  routes: [
    {
      method: 'GET',
      path: '/cart/b2c',
      handler: 'bc-send-cart.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/cart/b2c/sucses',
      handler: 'bc-send-cart.sucses',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
