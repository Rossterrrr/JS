const n = +prompt('Enter - width');
const m = +prompt('Enter - long');
const a = +prompt('Enter size of block');
const long = Math.ceil(m/a);
const width = Math.ceil(n/a);
console.log(`${long*width} Плит`);

