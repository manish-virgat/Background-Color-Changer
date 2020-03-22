const colorbtn = document.querySelector('.colorbtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','#3b5998','white','purple','pink','black','blue'];

colorbtn.addEventListener('click',changeColor);
function changeColor()
{
    //bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}
