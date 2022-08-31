// const numbers = [12, 35,54, 55, 65];
// for(const number of numbers){
//     console.log(number)
// }
//For of can not be use on object
const bottle = { color: "yellow", price: 30, isCleaned: true, capacity: 2 };
const keys = Object.keys(bottle);
for(const key of keys){
    // console.log(key,bottle[key])
}

const bottle1 = { color: "yellow", price: 30, isCleaned: true, capacity: 2 };
//For in loop
for(const key in bottle1){
    const value = bottle1[key];
    // console.log(key, value);
}
//advance-
for(const [key, values] of Object.entries(bottle1)){
    console.log(key, values);
}