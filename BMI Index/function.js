const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('.result');
    if(height<=0|| height===''|| isNaN(height)) {
        result.innerHTML='Enter a valid height';
    }
    else if(weight<=0|| weight===' '|| isNaN(weight)) {
        result.innerHTML="Enter a valid weight";
    }
    else {bmi=(weight/ ((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`;}
})