/**
 * A set of functions called "actions" for `bb-send-cart`
 */

export default {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
