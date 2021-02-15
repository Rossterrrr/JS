const obj ={
    name:'test',
    width:1024,
    height:1024,
    colors:{
        border:'black',
        background:'red'
    },
    makeTest:function(){
        console.log('Test method');
    }
}

obj.makeTest();

console.log(obj.name);
delete obj.name;
let counter = 0;
console.log(obj);
for(let key in obj){
    if(typeof(obj[key]) === 'object'){
        for(let i in obj[key]){
            console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
            counter++;
        }
    }else {
        console.log(`Свойство ${key} имеет значение ${obj[key]}`);
        counter++;
    }
   
}
console.log(counter);

const {border,background} = obj.colors;
console.log(border,background);