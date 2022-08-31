const sajib = {
  name: "sajib",
  class: "IV",
  salary: 5000,
  subject: ["banga", "math", "english", "Ict"],
  favouriteSubject: function () {
    return this.subject + " Subject is her favourite subject";
  },
  improvExam: function (subject) {
    this.favouriteSubject();
    return `${this.name} is need to improving on this ${subject} subject`;
  },
  treatDay: function (amount, tips = 10) {
    this.salary = this.salary - amount - tips;
    return this.salary;
  },
};
// const result = sajib.improvExam();
// console.log(result);
const rajib = {
    name: 'Rajib',
    salary: 20000,
}
const result2 = sajib.favouriteSubject.call(rajib);
console.log(result2);