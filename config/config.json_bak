const env2 = require('env2');

if(process.env.NODE_ENV === 'production'){
  env2('./env/.env.prod');
}else{
  env2('./env/.env');
}

const {env} = process;

module.exports = {
  development:{
    username:env.MYSQL_USERNAME,
    password:env.MYSQL_PASSWORD,
    database:env.MYSQL_DB_NAME,
    host:env.MYSQL_HOST,
    port:env.MYSQL_PORT,
    dialect:'mysql',
    operatorsAliases:false,
    },
    production:{
      username:env.MYSQL_USERNAME,
      password:env.MYSQL_PASSWORD,
      database:env.MYSQL_DB_NAME,
      host:env.MYSQL_HOST,
      port:env.MYSQL_PORT,
      dialect:'mysql',
      operatorsAliases:false,
      },
};

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
