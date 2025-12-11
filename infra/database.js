import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    user: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    host: process.env.POSTGRESS_HOST,
    port: process.env.POSTGRESS_PORT,
    database: process.env.POSTGRESS_DB,
  });
  await client.connect();
  const result = client.query(queryObject);
  await client.end();
}

export default {
  query,
};
