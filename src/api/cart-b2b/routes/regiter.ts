export default {
  routes: [
    {
      method: 'POST',
      path: '/cart/b2b',
      handler: 'regiter.cartB2B',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
