export default () => ({
  env: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
  },
});
