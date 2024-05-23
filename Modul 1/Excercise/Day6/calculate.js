class Student {
  constructor(name, email, birthdate, score) {
    this.name = name;
    this.email = email;
    this.birthdate = birthdate;
    this.score = score;
  }
}

const student1 = new Student("andi", "andi@gmail.com", "1995-01-01", 80);
const student2 = new Student("budi", "budi@gmail.com", "1996-01-01", 85);
const student3 = new Student("cahyo", "cahyo@gmail.com", "1997-01-01", 90);

const arrStudent = [student1, student2, student3];
// console.log(arrStudent)

// console.log(Math.min(1, 2, 3, 4, 5))

function convertAge(date) {
    let birthdate = new Date(date).getTime()
    let now = new Date().getTime()
    let diff = now - birthdate // milisecond
    let res = Math.floor(diff / (1000 * 60 * 60 * 24) / 365) // 28.9

    let year1 = new Date(date).getFullYear()
    let year2 = new Date().getFullYear()
    let result = year2 - year1
    
    return res
}

// convertAge("1995-01-01")

function calculate(arr) {
    let maxScore = Math.max(...arr.map(item => item.score))
    let minScore = Math.min(...arr.map(item => item.score))
    let avgScore = arr.map(item => item.score).reduce((a, b) => a + b) / arr.length

    let maxAge = Math.max(...arr.map(item => convertAge(item.birthdate)))
    let minAge = Math.min(...arr.map(item => convertAge(item.birthdate)))
    let avgAge = arr.map(item => convertAge(item.birthdate)).reduce((a, b) => a + b) / arr.length

    return {
        score: {
            max: maxScore,
            min: minScore,
            avg: avgScore
        },
        age: {
            max: maxAge,
            min: minAge,
            avg: avgAge
        }
    }
}

console.log(calculate(arrStudent))


// console.log(Math.floor(2.9)) // pembulatan kebawah
// console.log(Math.ceil(2.1)) // pembulatan keatas
// console.log(Math.round(2.5)) // pembulatan

console.log(arrStudent);

const scoreStudent = arrStudent.map(item => item.score)
console.log(scoreStudent.reduce((a, b) => a + b));

const ageStudent = arrStudent.map(item => convertAge(item.birthdate))
console.log(ageStudent)