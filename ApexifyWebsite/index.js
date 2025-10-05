const firstPara=document.querySelector('.first');
const secondPara=document.querySelector('.second');
const thirdPara=document.querySelector('.third');
const forthPara=document.querySelector('.forth');

const btn=document.getElementById('btn')
const btn2=document.getElementById('btn2')
const btn3=document.getElementById('btn3')
const btn4=document.getElementById('btn4')
btn.addEventListener(('click'),()=>{
   firstPara.classList.toggle('first');
}
)
btn2.addEventListener(('click'),()=>{
   secondPara.classList.toggle('second');
}
)
btn3.addEventListener(('click'),()=>{
   thirdPara.classList.toggle('third');
}
)
btn4.addEventListener(('click'),()=>{
   forthPara.classList.toggle('forth');
}
)