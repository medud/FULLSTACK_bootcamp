const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.every((value)=> { return (value > 0); });

myArr.every(value => value == 5 );

myArr.every((value) => { 
    console.log(value); 
    return (value != 10); 
});