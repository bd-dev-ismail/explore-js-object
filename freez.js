const bottle = {color: 'yellow', price: 30, isCleaned: true, capacity: 2 };
const propertys = Object.keys(bottle); //propertys / keys
// console.log(propertys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle); //keys + value ek shate ekta ekta dibe as like loop
// console.log(pair); //Entries
Object.seal(bottle); //Seal ! seal korle porer line er delete ta backup dawa jabe
delete bottle.isCleaned //to delete a partycullar property
bottle.price = 1000;// Seal korar por o values change kora jabe
bottle.height = 12;// Seal korle new property add kora jab nah!
console.log(bottle) //Delete
Object.freeze(bottle);//Freez korle object k delete kora jabe na, values update kora jabe na,new property add kora jabe na.. it's means freez.