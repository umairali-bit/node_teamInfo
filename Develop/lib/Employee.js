// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name, id, position, email){
        this.name = name;
        this.id = id;
        this.position = position;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getID(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getPosition(){
        return "Employee";
    }

    
}
module.export = Employee;
