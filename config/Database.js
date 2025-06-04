const {Sequelize} = require("sequelize");

const db = new Sequelize('test','2PABVGxvqiFUz6f.root','RA9fNDEAnDuplTTY',{
    host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
    port: 4000,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {"rejectUnauthorized":true}
    }
});

module.exports = db;
