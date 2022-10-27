module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'noreply@triangular.media',
        defaultReplyTo: 'noreply@triangular.media',
        testAddress: 'noreply@triangular.media',
      },
    },
  },
  // ...
  
  upload: {
    config: {
      provider: "strapi-provider-upload-do", 
      providerOptions: {
        key: 'DO00HT9GPYMQ79WWTV6E',
        secret: 'UaHe6gNAthOKDTuDc3DHx34kfufjm6k9SOmpjK8SStQ',
        endpoint: 'nyc3.digitaloceanspaces.com',
        space: 'cdntriangular',
        directory: 'triangularAPP',
        cdn: 'cdn.triangular.media'
      }
    },
  }, 
  
  // ...
});