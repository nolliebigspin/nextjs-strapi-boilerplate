module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77f0eb707c45267e94862e02ebf5c504'),
  },
});
