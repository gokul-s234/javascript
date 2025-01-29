// method to update the year and return book's description
class Book {
  constructor(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
  }

  // Method to update the year
  updateYear(newYear) {
    this.year = newYear;
  }

  // Method to return the book's description
  getDescription() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

// Example usage
const myBook = new Book("J.K. Rowling", "Harry Potter and the Philosopher's Stone", 1997);

// Update the year
myBook.updateYear(1998);

// Get the book's description
console.log(myBook.getDescription()); // Output: Harry Potter and the Philosopher's Stone by J.K. Rowling, published in 1998.


// student object and update grade
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  // Method to update the grade
  updateGrade(newGrade) {
    this.grade = newGrade;
  }

  // Method to check if the student passed
  hasPassed() {
    return this.grade >= 50;
  }
}

// Example usage
const student = new Student("Alice", 45);

// Update the grade
student.updateGrade(60);

// Check if the student passed
console.log`(${student.name} has ${student.hasPassed() ? "passed" : "failed"}.)`; 
// Output: Alice has passed.