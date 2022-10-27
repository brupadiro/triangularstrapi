module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa94f33ef42a940cf08f488bb203b7b3'),
  },
});
