let start = new Date();

for(let i = 0; i < 10000000;i++){
    let some = i ** 3;
}

let end = new Date();

console.log(`ЦИКЛ выполнился за ${end - start} милисекунд`);