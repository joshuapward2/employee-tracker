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

    if(err){
      console.log(err)
    }
    console.table(res)
    chooseRole()
  })
  
}


function viewEmployees() {
  db.query(`SELECT * FROM employee;`, (err, res) => {
    if(err){
      console.log(err)
    }
    console.table(res)
    chooseRole()
  })
  
}


function addDepartment() {
  inquirer.prompt(
    {
      name: "Department_name",
      message: "Whats the name of the department?",
      type: "input"

    }
    
  ).then(ans => {
    db.query(`INSERT INTO department(name) VALUES("${ans.Department_name}");`, (err, res) => {
      if(err){
        console.log(err)
      }
      console.table(res)
      chooseRole()
    })
  })
} 




function addRole() {
  inquirer.prompt([
    {
      name: "Role_name",
      message: "Whats the name of the role you'd like to add?",
      type: "input"

    },
    {
      name: "Salary",
      message: "Whats the salary for this role?",
      type: "input"

    },
    {
      name: "Role_Department",
      message: "What department id is this role in?",
      type: "input"

    }
    
    
    
  ]).then(roleAns => {
    db.query(`INSERT INTO role(title,salary,department_id) VALUES("${roleAns.Role_name}", ${roleAns.Salary},${roleAns.Role_Department});`, (err, res) => {

      if(err){
        console.log(err)
      }
      console.table(res)
      chooseRole()
    })
  })
} 



function addEmployee() {
  inquirer.prompt([
    {
      name: "first_name",
      message: "Whats the employees first name?",
      type: "input"

    },
    {
      name: "last_name",
      message: "Whats the employees last_name?",
      type: "input"

    },
    {
      name: "role_id",
      message: "Whats the employee's role_id?",
      type: "input"

    },
    {
      name: "manager_id",
      message: "Whats the employee's manager_id?",
      type: "input"

    }
    
    
    
    
  ]).then(empAns => {
    db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES("${empAns.first_name}", "${empAns.last_name}", ${empAns.role_id}, ${empAns.manager_id});`, (err, res) => {

      if(err){
        console.log(err)
      }
      else{
      console.table(res)
      chooseRole()
    }
    })
  })
} 

function updateEmployeeRole() {

  inquirer.prompt([

    {
      name: "role_name_update",
      message: "Whats the id of the employee youd like to update?",
      type: "input"

    },
    {
      name: "role_name_update2",
      message: "Whats the id of the role youd like to update?",
      type: "input"

    },

  ]).then(updateEmpAns => {
    db.query(`UPDATE employee SET role_id = ${updateEmpAns.role_name_update2} WHERE id = ${updateEmpAns.role_name_update}`, (err, res) => {
      if(err){
        console.log(err)
      }
      else{
      console.table(res)
      chooseRole()
    }
    })


})




}
chooseRole()
