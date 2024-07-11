export default {
  routes: [
    {
     method: 'GET',
     path: '/bb-send-cart',
     handler: 'bb-send-cart.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
