const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:3000';

const client = new pg.Client(connectionString);
client.connect();
client.query('CREATE DATABASE carmen;')
const query = client.query(
  'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(40) not null, password_digest VARCHAR(40) not null, session_token VARCHAR(40) not null)');
  query.on('end', () => { client.end(); });
)
