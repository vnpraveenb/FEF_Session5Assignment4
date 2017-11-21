 // Creating an Object using Constructor Object Pattern 
 var employee = new Object();
 employee.username = "johndoe";
 employee.skills = "JavaScript Coding";
 employee.basicSalary = 25000;

 // id is a string variable is used to target different id in the HTML document to change their innerHTML
var id = "employeedetailsbefore";

// Calling printDetails function by hoisting
printDetails();


// Calling changeSalary function by hoisting
changeSalary();
 


// Changing the value of id to get access a different HTML element 
 var id = "employeedetailsafter";

// Calling printDetails function by hoisting
printDetails();
 

// Function to change the salary property of the employee object
function changeSalary()
{
    employee.basicSalary = parseInt(prompt("Please input the changed salary of the Employee."));
}


// Function to print the employee object details in a HTML element using id value to target them and changing their innerHTML.
function printDetails()
{
    document.getElementById(id).innerHTML = "Username: " + employee.username +" <br>" + "Skills: " + employee.skills +" <br>" + "Basic Salary: " + employee.basicSalary +" <br>";   
}
