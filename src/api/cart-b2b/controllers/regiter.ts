/**
 * A set of functions called "actions" for `regiter`
 */

import writeXlsxFile from 'write-excel-file/node'
const mime = require('mime-types'); //used to detect file's mime type
const fs = require('fs');

const SERVER_URL = 'https://mosinfobez.com'

const schema = [
  {
    column: '#',
    type: Number,
    value: x => x.index
  },
  {
    column: 'Vendor sku',
    type: String,
    value: x => x.el.vendor_sku
  },
  {
    column: 'Ref.',
    type: String,
    value: x => x.el.name
  },
  {
    column: 'Quantity',
    type: Number,
    value: x => x.cart_quntity
  },
  {
    column: 'Price',
    type: Number,
    format: '#,##0.00',
    value: x => x.el.price_b2b
  },
  {
    column: 'Cost',
    type: Number,
    format: '#,##0.00',
    value: x => x.el.price_b2b * x.cart_quntity
  },
]

export default {
  cartB2B: async (ctx, next) => {
    try {

      // const entries = await strapi.entityService.create(
      //   "plugin::users-permissions.user",
      //   {
      //     data: { ...ctx.request.body, username: ctx.request.body.email, provider: "local", confirmed: false }
      //   }
      // );

      // strapi.log.error(">>>>> ctx.params", ctx.params)

      ctx.body = 'ok';

      // let to = ctx.request.body.email;
      for (let i = 0; i < ctx.request.body.cart.length; i++) {
        ctx.request.body.cart[i].index = i + 1;

      }

      // strapi.log.error(JSON.stringify(ctx.request.body.cart))

      let fileName =
        'file_' + Math.ceil(Math.random() * 10000) + '.xlsx';

      const rootDir = process.cwd();
      const filePath = `${rootDir}/public/uploads/xlsx/${fileName}`

      await writeXlsxFile(ctx.request.body.cart, {
        schema,
        filePath
      });
      const stats = fs.statSync(filePath);
      //uploading it directly to upload services.
      await strapi.plugins.upload.services.upload.upload({
        data: {}, //mandatory declare the data(can be empty), otherwise it will give you an undefined error.
        files: {
          path: filePath,
          name: fileName,
          type: mime.lookup(filePath), // mime type of the file
          size: stats.size,
        },
      });

      // let ar = [["DC4021", "Bohemian collection -Baby deer comforter 24 cm", "10"],
      // ["DC4022", "Bohemian collection- Baby deer musical toy  20 cm", "10"],
      // ["DC4026", "Bohemian collection - LION  musical toy  20 cm", "10"],
      // ["DC4023", "Bohemian collection - Bear comforter  24 cm", "10"],
      // ["DC4024", "Bohemian collection - Bear musical toy  20 cm", "10"],
      // ["DC4050", "Bear comforting toy 27 cm", "5"],
      // ["DC4046", "DOUDOU bird  rose 22 cm", "10"],
      // ["DC4047", "DOUDOU bird green 22 cm", "10"],
      // ["DC4049", "DOUDOU bird yellow 22 cm", "10"],
      // ["DC3510", "Star bunny dummy holder 15 cm", "10"],
      // ["DC3513", "Star bunny comforting toy 10 cm pink", "5"],
      // ["DC3516", "Star bunny  25 cm pink", "5"],
      // ["DC3519", "Star bunny music toy pink 14 cm", "5"],
      // ["DC3511", "Sailor bunny  dummy holder 15 cm", "10"],
      // ["DC3514", "Sailor bunny comforting toy 10 cm blue", "5"],
      // ["DC3517", "Sailor bunny  25 cm blue", "5"],
      // ["DC3520", "Sailor bunny music toy blue 14 cm", "5"],
      // ["DC3515", "Prince bear comforting toy 10 cm beige", "5"],
      // ["DC3512", "Prince bear dummy holder 15 cm", "5"],
      // ["DC3518", "Prince bear 25 cm beige", "20"],
      // ["DC3521", "Prince bear music toy beige 14 cm", "5"],
      // ["DC3737", "HAPPY POP bunny 25 cm blue", "10"],
      // ["DC3745", "HAPPY POP bunny comforter 25 cm blue", "10"],
      // ["DC3739", "HAPPY BLUSH bunny 25 cm pink", "10"],
      // ["DC3744", "HAPPY BLUSH bunny comforter 25 cm pink", "5"],
      // ["DC3853", "HAPPY BLUSH bunny 65 cm pink", "5"],
      // ["DC3738", "HAPPY WILD bunny 25 cm beige", "15"],
      // ["DC3740", "HAPPY WILD bunny comforter beige 25 cm", "15"],
      // ["DC3854", "HAPPY WILD bunny 65 cm beige", "5"],
      // ["DC3275", "Unicorn Lucie gold comforter 22 cm", "10"],
      // ["DC3313", "Unicorn Lucie 22 cm ", "20"],
      // ["DC3311", "Unicorn rattle 0/6 month ", "10"],
      // ["DC3972", "My DOUDOU BALLERINA bunny 30 cm", "5"],
      // ["DC3976", "My DOUDOU BALLERINE Baby deer 30 cm ", "10"],
      // ["DC2928", "Comforter bear original beige 25 cm", "2"],
      // ["DC2920", "Comforter bear pink 24 cm", "10"],
      // ["DC2921", "Comforter bear blue 24 cm", "10"],
      // ["DC2123", "Bunny BONBON comforter beige 26 cm", "15"],
      // ["1243", "Bunny BONBON 30 cm beige", "15"],
      // ["DC1310", "Bunny  BONBON - rattle 0/6 month beige", "10"],
      // ["DC2122", "Bunny BONBON comforter pink  26 cm", "5"],
      // ["1242", "Bunny BONBON 30 cm pink", "10"],
      // ["DC1308", "Bunny  BONBON - rattle 0/6 month pink", "15"],
      // ["DC2121", "Bunny BONBON comforter blue  26 cm", "5"],
      // ["DC1309", "Bunny  BONBON - rattle 0/6 month blue", "15"],
      // ["1241", "Bunny BONBON 30 cm blue", "10"],
      // ["JJ6035", "Ballerina Anaïs 35 cm", "10"],
      // ["JJ6036", "Ballerina  Isadora 35 cm", "10"],
      // ["JJ6037", "Ballerina  Margot 35 cm", "10"],
      // ["JJ6029", "Fairy Diane 25 cm", "10"],
      // ["JJ6030", "Fairy Gaia 25 cm", "10"],
      // ["JJ6031", "Fairy Tara 25 cm", "10"],
      // ["JJ6032", "Fairy Aurore 25 cm", "10"],
      // ["HO3220", "Bear LE NOUNOURS - white 28 cm", "5"],
      // ["HO3221", "Bear LE NOUNOURS - white 40 cm", "5"],
      // ["HO3222", "Bear LE NOUNOURS - white 75 cm", "5"],
      // ["HO3223", " Bear LE NOUNOURS - Vanille 28 cm", "5"],
      // ["HO3224", " Bear LE NOUNOURS - Vanille 40 cm", "5"],
      // ["HO3225", " Bear LE NOUNOURS - Vanille 75 cm", "5"],
      // ["HO3226", " Bear LE NOUNOURS - Noisette 28 cm", "5"],
      // ["HO3227", " Bear LE NOUNOURS - Noisette 40 cm", "5"],
      // ["HO3228", " Bear LE NOUNOURS - Noisette 75 cm", "5"],
      // ["HO3232", " Bear LE NOUNOURS - Rose praline 28 cm", "5"],
      // ["HO3233", " Bear LE NOUNOURS - Rose praline 40 cm", "5"],
      // ["HO3234", "Bear LE NOUNOURS - Rose praline 75 cm", "5"],
      // ["HO3238", "Bear LE NOUNOURS - Ocre 28 cm", "5"],
      // ["HO3239", "Bear LE NOUNOURS - Ocre 40 cm", "5"],
      // ["HO3240", "Bear LE NOUNOURS - Ocre 75 cm", "5"],
      // ["HO3120", "COPAIN CALIN - bunny blue 25 cm", "10"],
      // ["HO3121", "COPAIN CALIN - Lapin Rose tendre 25 cm", "10"],
      // ["HO3122", "COPAIN CALIN - mouce terracota 25 cm", "10"],
      // ["HO3123", "COPAIN CALIN - bear brown  25 cm", "10"],
      // ["HO3124", "COPAIN CALIN - fox 25 cm", "10"],
      // ["HO3125", "COPAIN CALIN - Koala 25 cm", "10"],
      // ["HO3091", "HIP'CHIC - Hippo ivory 40 cm ", "8"],
      // ["HO3110", "HIP'BLUE - Hippo blue 40 cm", "8"],
      // ["HO3102", "HIP'FUN - Hippo pink 40 cm", "8"],
      // ["HO3135", "PREPPY CHIC - bunny Blanc 40 cm", "15"],
      // ["HO3137", "PREPPY CHIC - bunny Rose 40 cm", "15"],
      // ["HO2769", "Golden unicorn 45 CM", "5"]];

      // let count = 0;
      // for (let i in ar) {
      //   let x = ar[count];

      //   strapi.log.debug(x[0])
      //   const entries1 = await strapi.entityService.findMany('api::item.item', {
      //     filters: { vendor_sku: x[0] },
      //   });

      //   strapi.log.error(JSON.stringify(entries1, null, 2))

      //   const entry = await strapi.entityService.update('api::item.item', entries1[0].id, {
      //     data: {
      //       size: /(\d\d\scm)/.exec(x[1]) == null ? null : /(\d\d\scm)/.exec(x[1])[1]
      //     },
      //   });
      //   strapi.log.error(count++)
      // };
      // await strapi.plugins['email'].services.email.send({
      //   to: to,
      //   // from: 'contact@mosinfobez.com',
      //   subject: 'Toy boutiq registration',
      //   text: 'Thnk you for registration on our site. We will contact you in a few working days. Thanks for your interest.',
      //   // html: 'Hello world!',
      // });


      let to = ctx.request.body.user.email;
      if (to == null) {
        return;
      }
      await strapi.plugins['email'].services.email.send({
        to: "toyboutiqueae@gmail.com",
        from: 'contacts@toyboutique.ae',
        subject: 'B2b buy order',
        text: 'New buy order from ' + to + ' please unswer his request in your outbox.',
        attachments: [{   // use URL as an attachment
          filename: 'b2b_trade.xlsx',
          path: SERVER_URL + `/uploads/xlsx/${fileName}`
        }],
        // html: 'Hello world!',
      });

      await strapi.plugins['email'].services.email.send({
        to,
        from: 'contacts@toyboutique.ae',
        subject: 'Toy order',
        text: 'We will contact you shortly.',
        attachments: [{   // use URL as an attachment
          filename: 'b2b_trade.xlsx',
          path: SERVER_URL + `/uploads/xlsx/${fileName}`
        }],
        // html: 'Hello world!',
      });

    } catch (err) {
      strapi.log.debug("err", err)
      ctx.body = err;
    }
  }
};
