// TODO: Faire la manipulation du DOM dans ce fichier

// for the typing number on the button click of a calculator

const chiffre = document.querySelectorAll('.digit');
const lesSorties = document.getElementById('input');
const result = document.getElementById('calcul');
const GetReset = document.getElementById('reset');
const dotButton = document.querySelector('.dot');

// for  prevent user typing keyboards to make input value and let also the numeric keyboard

document.addEventListener('keypress', (event) => {
  for(let i = 0; i<= lesSorties.length; i++){
    if(event.key == '0'|| event.key == '1'|| event.key == '2'|| event.key == '3'|| event.key == '4'|| event.key == '5'|| event.key == '6'|| event.key == '7'|| event.key == '8'|| event.key == '9'  ){
      return 
    }else if(event.key == '+' || event.key == '-' || event.key == '/' || event.key == '*' || event.key == '=' || event.key == '%'){
        return 
    }else {
      event.preventDefault();
    }

  }
  
    
  
  
})




for (let i = 0; i < chiffre.length; i++) {
  chiffre[i].addEventListener('click', () => {




    if (lesSorties.value.at(0) != 0) {
      lesSorties.value += chiffre[i].textContent;
      

    } else {
      lesSorties.value = chiffre[i].textContent;
    }

  });
}

// the . button



dotButton.addEventListener('click', () => {
  if (lesSorties.value == '') {

    lesSorties.value +=dotButton.textContent;
    result.textContent += lesSorties.value;


  } else if (lesSorties.value.includes('.')) {
    lesSorties.value = lesSorties.value;
  }
  else {
    lesSorties.value += dotButton.textContent;
  }

})



// clear the last input with the C  click
const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
  lesSorties.value = lesSorties.value.slice(0, -1);
  result.textContent = lesSorties.value;
})

// to reset the result field with AC
GetReset.addEventListener('click', () => {
  result.textContent = null;
})


// // All opertations

// // the percentage

const pourcentage = document.getElementById('percentage');

pourcentage.addEventListener('click', () => {
  lesSorties.value = lesSorties.value;
  result.textContent = lesSorties.value / 100;
})


// // change a sign 

const plusoumoins = document.getElementById('plusoumoins');

plusoumoins.addEventListener('click', () => {
  lesSorties.value = lesSorties.value * -1;
  result.textContent = lesSorties.value;
})

// // addition's sign
const signePlus = document.getElementById('plus');
signePlus.addEventListener('click', () => {
  
    if(lesSorties.value.substr(lesSorties.value.length - 1) == '/' || lesSorties.value.substr(lesSorties.value.length - 1) == '+' || lesSorties.value.substr(lesSorties.value.length - 1) == '*' || lesSorties.value.substr(lesSorties.value.length - 1) == '-' || lesSorties.value.substr(lesSorties.value.length - 1) == '.' ){
    
        lesSorties.value = lesSorties.value ;
    
  }else{
      result.textContent = lesSorties.value + '+';
    lesSorties.value = lesSorties.value + '+';

 
  }
   
})

// sustraction's sign

const signeMoins = document.getElementById('minus');
signeMoins.addEventListener('click', () => {
  if(lesSorties.value.substr(lesSorties.value.length - 1) == '/' || lesSorties.value.substr(lesSorties.value.length - 1) == '+' || lesSorties.value.substr(lesSorties.value.length - 1) == '*' || lesSorties.value.substr(lesSorties.value.length - 1) == '-' || lesSorties.value.substr(lesSorties.value.length - 1) == '.' ){
    lesSorties.value = lesSorties.value;
  }else{
    result.textContent = lesSorties.value + '-';
    lesSorties.value = result.textContent;
  }
  
   
})

//  Multiplication's sign

const signeMultiplier = document.getElementById('times');
signeMultiplier.addEventListener('click', () => {
  if(lesSorties.value.substr(lesSorties.value.length - 1) == '/' || lesSorties.value.substr(lesSorties.value.length - 1) == '+' || lesSorties.value.substr(lesSorties.value.length - 1) == '*' || lesSorties.value.substr(lesSorties.value.length - 1) == '-' || lesSorties.value.substr(lesSorties.value.length - 1) == '.' ){
     lesSorties.value = lesSorties.value;
  }else{
    result.textContent = lesSorties.value + '*';
    lesSorties.value = result.textContent;
  }
  
})

//  division's sign

const signeDivision = document.getElementById('divideby');
signeDivision.addEventListener('click', () => {
  if(lesSorties.value.substr(lesSorties.value.length - 1) == '/' || lesSorties.value.substr(lesSorties.value.length - 1) == '+' || lesSorties.value.substr(lesSorties.value.length - 1) == '*' || lesSorties.value.substr(lesSorties.value.length - 1) == '-' || lesSorties.value.substr(lesSorties.value.length - 1) == '.' ){
    lesSorties.value = lesSorties.value;
  }else{
    result.textContent = lesSorties.value + '/';
   lesSorties.value = result.textContent;
  }
  
  
  
})


// equality's sign

const signeEgale = document.getElementById('equals');
signeEgale.addEventListener('click', () => {
  while (lesSorties.value == '') {          // from the 158th line at the 167th line, it's no important, i'use this for help you catching thieves( to save my code original ), it's a ID for my code.
    if (result.textContent.includes('=')) { 
      let myIndex = result.indexOf('=');
      for (let i = 0; i > myIndex && i <= result.length; i++) {
        lesSorties.value = result[myIndex].textContent;
      }
    } else {
      lesSorties.value = result.textContent;
    }
  }
  if (lesSorties.value.includes('+') || lesSorties.value.includes('-') || lesSorties.value.includes('/') || lesSorties.value.includes('*')) {
    result.textContent = `${lesSorties.value} = ${eval(lesSorties.value)}`;
    lesSorties.value = `${eval(lesSorties.value)}`;
  } else {
    result.textContent = `${eval(lesSorties.value)}`;
    lesSorties.value = `${eval(lesSorties.value)}`;
  }

})


















