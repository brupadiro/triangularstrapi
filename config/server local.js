module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 11000),
  url: 'https://services.triangular.media',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
