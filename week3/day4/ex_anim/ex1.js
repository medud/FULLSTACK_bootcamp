//🌟 Exercise 1: Timer

// Part I
// setTimeout(() => {
//     alert("hello world")
// }, 2000);

// Part II


setTimeout(() => {
    const parent = document.getElementById('container');
    const para = document.createElement('p');
    para.textContent = 'hello world'

    parent.appendChild(para)
}, 2000);


// Part III
let counter=0;
const vv= setInterval(() => {
    const parent = document.getElementById('container');
    const para = document.createElement('p');
    para.textContent = 'hello world'
    parent.appendChild(para)
    counter++
    if(counter>=5){
        clearInterval(vv)
    }

    
}, 2000);

const butclr =document.getElementById('clear')
butclr.addEventListener('click',()=>{
    clearInterval(vv)
})


