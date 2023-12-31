const { Pool } = require("pg");
const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING
});

async function connect(){
    if (global.connection)
        return global.connection.connect();

    const client = await pool.connect();
    console.log("Criou o pool de conexão")

    const res = await client.query("select now()");
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return client;
}

connect();

async function selectCustomer(id){
    const client = await connect();
    const res = await client.query("SELECT * FROM formulario WHERE ID=" + id);
    return res.rows;
}

module.exports = {
    selectCustomer,
    pool
}

