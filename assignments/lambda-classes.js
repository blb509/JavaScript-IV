// CODE here for your Lambda Classes

class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(info) {
        super(info);
        this.specialty = info.specialty;
        this.favLanguage = info.favLanguage;
        this.catchPhrase = info.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class student extends Person {
    constructor(info){
        super(info);
        this.previousBackground = info.previousBackground;
        this.className = info.className;
        this.favSubjects = info.favSubjects;
    }

    listSubjects(arr) {
        let i;
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i])
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManangers extends Instructor {
    constructor(info) {
        super(info);
        this.gradClassName = info.gradClassName;
        this.favInstructor = info.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const Stew = new student({
    name: 'Stew',
    location: 'house',
    age: 4,
    gender: 'male',
    previousBackground: 'was a genius baby',
    className: 'WEB17',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

  const Key = new ProjectManangers({
    name: 'Key',
    location: 'Othello',
    age: 42,
    gender: 'male',
    favLanguage: 'R',
    specialty: 'Back-end',
    catchPhrase: 'Noice!',
    gradClassName: 'WEB16',
    favInstructor: 'Josh'
  });

/*
  Fred.speak();
  Fred.demo("Math");
  Fred.grade(Stew, "World Domination");
  Stew.listSubjects(Stew.favSubjects);
  Stew.PRAssignment("Weapons of Mass Chaos");
  Stew.sprintChallenge("Time Travel");
  Key.speak();
  Key.demo("English");
  Key.grade(Stew, "Poison Making");
  Key.standUp("WEB17");
  Key.debugsCode(Stew, "Hacking");
*/