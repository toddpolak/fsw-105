const employees = [];

function Employee(name, jobTitle, salary, status = 'Full Time') {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printEmployeeForm = function () {
    console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
};

const employee1 = new Employee('Bob Smith', 'V School Instructor', '$3000/hour', 'Part time');
employee1.printEmployeeForm();
employees.push(employee1);

const employee2 = new Employee('Todd Polak', 'Full Stack Web Developer', '$45/hour');
employee2.printEmployeeForm();
employees.push(employee2);

const employee3 = new Employee('Jane Doe', 'Graphic Design', '$38/hour');
employee3.printEmployeeForm();
employees.push(employee3);

console.log(employees);