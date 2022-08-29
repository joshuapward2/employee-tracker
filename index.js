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
      password: '',
      database: '${placeholder}'
    },
    console.log('Connected to the election database.')
  );
  


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

               else {
                   
               } 
                   
               
           })
        }

        function viewDepartments() {
            inquirer.prompt()
        }








        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
          });