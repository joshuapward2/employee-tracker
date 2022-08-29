const inquirer  = require("inquirer");
const app = inquirer()

const cTable = require('console.table');

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });



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