// const names = ['ivan','ann','ksenia','voldemart'];

// const shortNames = names.filter(function(item){
//     return item.length < 5;
// });
// console.log(shortNames);

// const answers = ['ivan','anna','hello'];

// const result = answers.map((item) => {
//     return item.toLowerCase();
// })

const arr = [4,6,1,3,2,6];

const res = arr.reduce((sum,current) => sum + current);
console.log(res);