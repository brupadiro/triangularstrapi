module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'private-db-mysql-triangular-do-user-11725987-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'strapiDB'),
      user: env('DATABASE_USERNAME', 'strapiUSer'),
      password: env('DATABASE_PASSWORD', 'AVNS_EjuIK_VwZuPu-nnIW69'),
      ssl: env.bool('DATABASE_SSL', true),
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