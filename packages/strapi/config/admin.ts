export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b29302762b7eed7ebfb3116a1e6649a1'),
  },
});
