/**
 * A set of functions called "actions" for `bc-send-cart`
 */
import paypal from 'paypal-rest-sdk'
import aramex from 'aramex-api'

var client_id = 'Ae2EMr5QwSJuvqcqGZwIeOzkof6ct9hD3CfDKuGpZeed9jV39Mw6Et4vSzci-UNfYbB7DuYjcWivVeOo';
var secret = 'EL8YjunDEBq0mdcp9F9GT7n8U08xeyZ8Tam1MX9O2_-JKLfMU0Wv2ohDHwa3dgOAOQ44l_dBcyo9rZxR';

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': client_id,
  'client_secret': secret
});

export default {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = "ok"

      var payReq = JSON.stringify({
        'intent': 'CAPTURE',
        'redirect_urls': {
          'return_url': 'http://localhost:3000/process',
          'cancel_url': 'http://localhost:3000/cancel'
        },
        'payer': {
          'payment_method': 'paypal'
        },
        'transactions': [{
          'amount': {
            'total': '7.47',
            'currency': 'USD'
          },
          'description': 'This is the payment transaction description.'
        }]
      });

      let url = await new Promise((resolve, rej) => {
        paypal.payment.create(payReq, function (error, payment) {
          if (error) {
            console.error(error);
          } else {
            //capture HATEOAS links
            var links = {};
            payment.links.forEach(function (linkObj) {
              links[linkObj.rel] = {
                'href': linkObj.href,
                'method': linkObj.method
              };
            })

            //if redirect url present, redirect user
            if (links.hasOwnProperty('approval_url')) {

              strapi.log.debug("links  " + JSON.stringify(links))
              resolve(links['approval_url'].href)
            } else {
              strapi.log.debug('no redirect URI present');
              rej()
            }
          }
        });
      });

      // ctx.res.redirect(url);
      ctx.body = url;
    } catch (err) {
      ctx.body = err;
    }
  },
  sucses: async (ctx, next) => {
    try {
      ctx.body = ""
      let clientInfo = new aramex.ClientInfo();

      aramex.Aramex.setClientInfo(clientInfo);

      // aramex.Aramex.setConsignee(new aramex.Consignee());

      // aramex.Aramex.setShipper(new aramex.Shipper());

      // aramex.Aramex.setThirdParty(new aramex.ThirdParty());

      // aramex.Aramex.setDetails(1);

      // aramex.Aramex.setDimension();

      // aramex.Aramex.setWeight();

      //Creating shipment

      let result = await aramex.Aramex.createShipment([{ PackageType: 'Box', Quantity: 2, Weight: { Value: 0.5, Unit: 'Kg' }, Comments: 'Docs', Reference: '' }]);
    } catch {

      ctx.body = "ok"
    }
  }
};
