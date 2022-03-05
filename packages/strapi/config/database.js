module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'nolliebigspin'),
      user: env('DATABASE_USERNAME', 'nolliebigspin'),
      password: env('DATABASE_PASSWORD', 'nolliebigspin'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});