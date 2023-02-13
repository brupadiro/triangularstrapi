module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '45.148.28.72'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'triangularDB'),
      user: env('DATABASE_USERNAME', 'triangularUser'),
      password: env('DATABASE_PASSWORD', '7coB0Ru5qq21liHZVA8ojE5vfypNLx0c'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
/*
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'triangulardb'),
      user: env('DATABASE_USERNAME', 'triangularUser'),
      password: env('DATABASE_PASSWORD', 'xXjr4ZRHjFb6D8YG'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
*/