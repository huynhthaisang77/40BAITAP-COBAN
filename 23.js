// 23. Tạo một lớp `Person` với các thuộc tính `name`, `age` và phương thức `greet()`.
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    greet(){
       return `Tên của tôi là ${this.name}, tuổi là ${this.age}`
    }
}
const use = new Person('sang',22);
console.log(use.greet());

module.exports = Person