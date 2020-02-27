import {DataSource} from './database/mysql_utils.js';
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let dataSource = new DataSource();
let start : any = new Date();
let db = dataSource.init({  host: "127.0.0.1",  user: "root",  database : "test",  password: ""});

(async ()  => {
 
  try {

    let data = await db.query("SELECT user.*, user_type.name FROM user JOIN user_type ON user.type_id = user_type.id LIMIT 1", null);
    let end : any = new Date();
    end = end - start;
    console.log('Execution time: %dms', end);
  } catch(error) {
    console.log(error);
  }
})();



/*
let start : any = new Date();
try {
  let data = await db.query("SELECT * FROM user", null);


  console.info('Execution time: %dms', end);
} catch(error) {
  console.log(error);
}*/