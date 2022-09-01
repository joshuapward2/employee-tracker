const inquirer  = require("inquirer");

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const cTable = require('console.table');

const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Smallsnail853',
      database: 'Employee_Tracker'
    },
    console.log('Connected to the election database.')
  );
  
db.connect()


  function chooseRole () {

    inquirer.prompt([
            {
                  type: 'list',
                   name: "whoNext",
                   message: "Whats would you like to do",
                   choices: [' view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role' ]
               }
           ]).then(ans => {
               if(ans.whoNext === ' view all departments'){
                viewDepartments()
               }
               else if(ans.whoNext === 'view all roles'){
                   viewRoles()
               }
               else if(ans.whoNext === 'view all employees'){
                viewEmployees()
            }
            else if(ans.whoNext === 'add a department'){
               addDepartment()
            }
            else if(ans.whoNext === 'add a role'){
                addRole()
             }
             else if(ans.whoNext === 'add an employee'){
                addEmployee()
             }
             else if(ans.whoNext === 'update an employee role'){
                updateEmployeeRole()
             }

            
                   
               
           })
        }

        function viewDepartments() {
          db.query(`SELECT * FROM department;`, (err, res) => {
            console.table(res)
            chooseRole()
          })
          
        }


function viewRoles() {
  db.query(`SELECT * FROM role;`, (err, res) => {
    console.table(res)
    chooseRole()
  })
  
}


function viewEmployees() {
  db.query(`SELECT * FROM employee;`, (err, res) => {
    console.table(res)
    chooseRole()
  })
  
}
chooseRole()

function addDepartment() {
  inquirer.prompt(
    {
      name: "Department_name",
      message: "Whats the name of th department?",
      type: "input"

    }
    
  ).then(ans => {
    db.query(`INSERT INTO department VALUES(${ans.Department_name});`, (err, res) => {
      console.table(res)
      chooseRole()
    })
  })
} 







       