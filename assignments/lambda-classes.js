// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}, I'm from ${this.location}`);
  }
}
class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} recieves a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(item => console.log(item));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Person {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standup(channel) {
    console.log(`${this.name} announces to ${channel} @channel standup time`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const john = new Student({
  name: 'John',
  age: 25,
  location: 'Petersburg',
  previousBackground: 'welder',
  className: 'CS1',
  favSubjects: ['javascript', 'databases', 'ui'],
});

const sam = new Instructor({
  name: 'Sam',
  age: 50,
  location: 'Houston',
  specialty: 'HTML',
  favLanguage: 'Clojure',
  catchPhrase: 'Get up with the get up',
});

const boe = new ProjectManager({
  name: 'Boe',
  age: 35,
  location: 'Atlanta',
  gradClassName: 'UX54',
  favInstructor: 'Sam',
});

console.log(john);
console.log(sam);
console.log(boe);

sam.speak();
john.speak();
boe.speak();

john.listsSubjects();
john.PRAssignment('javascript-I');
john.sprintChallenge('javascript-II');

sam.demo('javascript-I');
sam.grade(john, 'javascript-IV');

boe.standup('slack-slack');
boe.debugsCode(john, 'javascript-IV');
