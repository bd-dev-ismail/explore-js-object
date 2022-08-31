const student = {
    name: 'sajib',
    class: 'IV',
    salary: 5000,
    subject: ['banga', 'math', 'english', 'Ict'],
    favouriteSubject: function (){
        return this.subject[3] + ' Subject is her favourite subject';
    },
    improvExam: function(subject){
        this.favouriteSubject();
        return `${this.name} is need to improving on this ${subject} subject`
    },
    treatDay: function(amount, tips = 10){
        this.salary = this.salary - amount - tips;
        return this.salary;
    }
};
const output = student.favouriteSubject();
// console.log(output)
const reExam = student.improvExam('english');
// console.log(reExam)
const restMoney = student.treatDay(2000,20);
console.log(restMoney)
const dolaRest = student.treatDay(200);
console.log(dolaRest)