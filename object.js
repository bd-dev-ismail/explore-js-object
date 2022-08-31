//2ta jinish object e take property & Methods 
const player = {};
player.name = 'Sakib al Hasan';
player.speciality  = 'Left Handed BatsMan';
// 1 object method
player.bat = function (){
    console.log('Short a boundery')
}
// player.bat()
// console.log(player);
// 2 Common! we use this type object
const student = {
    name: 'rahim',
    job: 'teaching',
    bat: function (){
        console.log('throw the ball');
    },
    salary: 10000
}
// console.log(student)

//Object Constructor 
const person = new Object();// provide a empty object
// console.log(person)
//3 object create Methods
// const item = Object.create(null);
const atel = Object.create(student);//create protypical chain
// console.log(atel.name)
//4.object class
class Person{
    name = 'abul';
    class = 'IV';
    constructor(age){
        this.age = age;
    };
};
const person1 = new Person(22);
console.log(person1)
//Function
function Car(model, price){
    this.model = model;
    this.price = price;
};
const noha = new Car('marcitis', 34);
// console.log(noha);