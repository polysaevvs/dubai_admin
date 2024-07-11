// config/plugins.js

module.exports = () => ({
  //...
  meilisearch: {
    config: {
      // Your meili host
      host: "http://158.160.125.124:7700",
      // Your master key or private key
      apiKey: "masterKey",
    }
  },
  upload: {
    config: {
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        thumbnail: 150
      }
    }
  },
  email: {
    // config: {
    //   provider: 'nodemailer',
    //   providerOptions: {
    //     host: 'smtp.mailgun.org',
    //     port: 587,
    //     auth: {
    //       user: 'postmaster@sandbox8bd33bb2794a4af1a391e3a1f58f5c5f.mailgun.org',
    //       pass: 'e48e7a722e96834b15e5af670a57713e-1900dca6-bb3ef90a',
    //     },
    //     // ... any custom nodemailer options
    //   },
    //   settings: {
    //     defaultFrom: 'e48e7a722e96834b15e5af670a57713e-1900dca6-bb3ef90a',
    //     // defaultReplyTo: 'username@gmail.com',
    //   },
    // },
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'toyboutiqueae@gmail.com',
          pass: 'jzuz xmaf ysmb ewvw',//njek bwwr shew vpkp
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'contacts@toyboutique.ae',
        // defaultReplyTo: 'username@gmail.com',
      },
    },
  },
  "random-sort": {
    enabled: true,
  },
})