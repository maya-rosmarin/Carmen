// const user = (sequelize, DataTypes) => {
//   const User = sequelize.define('user', {
//     username: {
//       type: DataTypes.STRING,
//       unique: true,
//     },
//   });
//   return User;
// }
//
// module.exports = user;

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:3000';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(40) not null, password_digest VARCHAR(40) not null, session_token VARCHAR(40) not null)');
  query.on('end', () => { client.end(); });
)
