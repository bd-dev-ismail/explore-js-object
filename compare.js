// const first = {a: 2};
// const second = {a:2};
// const third = second;
// if(third === second){
//     console.log('They are same');
// }
// else{
//     console.log('They are not same');
// }
const first = { a:2, b:3, c:5, e:1 };
const second = { a:2,  c:5, b:3};
// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// console.log(firstString,secondString)
// if(firstString === secondString){
//     console.log('same');
// }
// else{
//     console.log('different');
// }
function compareObj(first, second){
    const firstkeys = Object.keys(first);
    const secondkeys = Object.keys(second);
    if(firstkeys.length === secondkeys.length){
        for(const key of firstkeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
};
const isSame = compareObj(first, second);
console.log(isSame);