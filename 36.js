// Tạo một lớp `Student` kế thừa từ lớp `Person` và thêm thuộc tính `grade`.
const Person = require("./23");

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age, grade);
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  grade() {
    return `Tên của tôi là ${this.name}, tuổi là ${this.age}, và ${this.grade}`;
  }
}

const a = new Student("sang", 22, "A");
console.log(a.grade);
