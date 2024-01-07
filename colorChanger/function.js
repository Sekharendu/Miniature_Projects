const button=document.querySelectorAll('.subContainer');
const body=document.querySelector('body');
const para=document.querySelector('p');
const header=document.querySelector('h1');
button.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        para.style.color='black';
        header.style.color="black";
        if(e.target.id==="red"){
            body.style.backgroundColor="red"
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor="blue"
        }
         if(e.target.id==="green"){
            body.style.backgroundColor="green"
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor="yellow"
        }
        if(e.target.id==="orange"){
            body.style.backgroundColor="orange"
        }
        if(e.target.id==="purple"){
            body.style.backgroundColor="purple"
        }
    })
});
para.addEventListener('click',function(){
    // console.log(colorChange.target)
    body.style.backgroundColor='black';
    para.style.color='white';
    header.style.color="white";
})
header.addEventListener('click',function(){
    // console.log(colorChange.target)
    body.style.backgroundColor='black';
    para.style.color='white';
    header.style.color="white";
})
// consosle.log(button);
