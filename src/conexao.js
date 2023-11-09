import mysql from 'mysql';

const criarConexao = () => {
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'chat_bot',
    });
};

export { criarConexao };