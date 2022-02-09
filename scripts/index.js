

const massiv=[];
let sum=0;
let  mult=1;
let sred;

function random(min, max) {
    return Math.ceil(min + Math.random() * (max - min));
  }

function generation(){
  
    for(let i=0;i<10;i++){
        let el=random(-10,10) ;
        massiv.push(el);
        sum+=el;
        mult*=el;
               
    }
   sred =Math.round(sum/massiv.length) ;
}
const maximum=(mas)=>{

    let max=mas[0];
    for (let i=1; i<mas.length;i++)
    if(max<mas[i])
    {
        max=mas[i];
    }

return max;
}
const minimum=(mas)=>{

    let min=mas[0];
    for (let i=1; i<mas.length;i++)
    if(min>mas[i])
    {
        min=mas[i];
    }

return min;
}


generation();


 
alert(`Сгенерировано ${massiv}\nСумма ${sum}\nПроизведение ${mult}\nСреднее арифметическое ${sred}\nМинимум${minimum(massiv)}\nМаксимум ${maximum(massiv)}`);