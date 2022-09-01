CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
    
);

INSERT INTO department(
    name 
)

VALUES("Tech");

CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL,
    department_id INT

);

INSERT INTO role(
title,
salary,
department_id
)

VALUES("Developer",
100.00,
1);


CREATE TABLE employee(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
     FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT,
     FOREIGN KEY (manager_id) REFERENCES employee(id)

);

INSERT INTO employee(
first_name,
last_name,
role_id,
manager_id)

VALUES("Roger", 
"Rabbit",
1,
NULL);



