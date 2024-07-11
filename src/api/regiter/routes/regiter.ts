export default {
  routes: [
    {
      method: 'POST',
      path: '/register',
      handler: 'regiter.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
