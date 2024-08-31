/**
 * A set of functions called "actions" for `regiter`
 */

export default {
  exampleAction: async (ctx, next) => {
    try {

      const entries = await strapi.entityService.create(
        "plugin::users-permissions.user",
        {
          data: { ...ctx.request.body, username: ctx.request.body.email, provider: "local", confirmed: false }
        }
      );

      strapi.log.error(ctx.request.body)
      // strapi.log.error(">>>>> ctx.params", ctx.params)

      ctx.body = 'ok';

      let to = ctx.request.body.email;

      await strapi.plugins['email'].services.email.send({
        to: to,
        from: 'contacts@toyboutique.ae',
        // from: 'contact@mosinfobez.com',
        subject: 'Toy boutiq registration',
        text: 'Thank you for registration on our site. We will contact you in a few working days. Thanks for your interest.',
        // html: 'Hello world!',
      });

      await strapi.plugins['email'].services.email.send({
        to: "toyboutiqueae@gmail.com",
        from: 'contacts@toyboutique.ae',
        // from: 'contact@mosinfobez.com',
        subject: 'Toy boutiq registration, new user',
        text: 'New user just registered with email ' + to + ' please unswer his request in your outbox.',
        // html: 'Hello world!',
      });

    } catch (err) {
      ctx.body = err;
    }
  }
};
