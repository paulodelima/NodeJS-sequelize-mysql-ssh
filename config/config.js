const fs = require('fs');

module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'dbteste',
        },
        tunnelSSH: {
            user: 'root',
            host: 'localhost',
            port: 22,
            password: '',
            dstHost: 'localhost',
            dstPort: 27017,
            srcHost: 'localhost',
            srcPort: 3306,
            localHost: 'localhost',
            localPort: 27000,
        },
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
        tunnelSSH: {
            user: process.env.TUNNEL_USER,
            host: process.env.TUNNEL_SSH_HOST,
            port: process.env.TUNNEL_PORT,
            dstHost: process.env.TUNNEL_DST_HOST,
            dstPort: process.env.TUNNEL_DST_PORT,
            srcHost: process.env.TUNNEL_SRC_HOST,
            srcPort: process.env.TUNNEL_SRC_PORT,
            localHost: process.env.TUNNEL_LOCAL_HOST,
            localPort: process.env.TUNNEL_LOCAL_PORT,
        },
    },
};
