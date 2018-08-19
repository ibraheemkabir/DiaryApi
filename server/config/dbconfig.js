const pg = require('pg');

const pool = new pg.Pool({
  host: 'localhost',
  user: 'User',
  password: 'root',
  database: 'users',
});

export default pool;
