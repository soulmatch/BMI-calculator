//Arrow Function
//int fun()
//function functionname(){
//}
//Arrow Function 

window.onload = () =>{
    let button = document.querySelector("#submitBmi");
    button.addEventListener("click", calculateBMI);

};

//Let calculateBMI =() =>{

//}
function calculateBMI(){
let height = parseInt(document.querySelector("#height").value);

let weight =parseInt(document.querySelector("#weight").value);

let result= document.querySelector("#bmiResult");

if(height === "" || isNaN(height) )
alert("Invalid Height");

else if(weight === "" || isNaN(weight) )
alert("Invalid Weight");
else{
    let bmi = (weight/((height*height)/10000)).toFixed(3);
    

    if(bmi<18.5)
    result.innerHTML ="You are Under weight" +bmi;

    else if(bmi>=18.5 && bmi<24.9)
    result.innerHTML ='You Have Normal Weight: <span>${bmi}</span>';
    else
    result.innerHTML ="You are Over weight: " +bmi;
     }
}
