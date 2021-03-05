const { Sequelize } = require('sequelize');
const tunnel = require('tunnel-ssh');
const fs = require('fs');

const environment = process.env.ENV || 'development';
const config = require('./config/config')[environment];

const { host, port, user, password, database } = config.database;

const sequelize = new Sequelize(database, user, password, {
    dialect: 'mysql',
    logging: false
});

const configTunnelSSH = config.tunnelSSH;

tunnel(configTunnelSSH, (error, server) => {
    if (error) {
        console.error(error);
    } else {
        console.info('Server Info: ', server);
        sequelize.authenticate().then(() => {
            console.info('Connection established');
        }).catch((err) => {
            console.error('Unable to establish connection', err);
        });
    }
});
