const h1 = document.querySelector('h1') 
const input1 = document.querySelector('#calculo1') 
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#resultado')
const form = document.querySelector('#form')


//Cuando utilizamos el addEventListener no tenemos que poner los parentesis en la funcion
// btn.addEventListener('click', btnOnClick)


// function btnOnClick(){
//     const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerHTML = "Resultados: " + sumaInputs;
// }

form.addEventListener('submit', sumarInputsValues)

function sumarInputsValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "Resultados: " + sumaInputs;
}

