const inquirer  = require("inquirer");
const app = inquirer()

const cTable = require('console.table');

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });