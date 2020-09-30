let employees = [];

function Employee(name, jobTitle, salary, status = 'Full Time') {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function() {
        console.log(`Name: ${name}, Job Title: ${jobTitle}, Salary: ${salary}, Status: ${status}`);
    }
}

let employee1 = new Employee('Bob', 'V School Instructor', '$3000/hour', 'Part time');
employee1.printEmployeeForm();
employees.push(employee1);

console.log(employees);