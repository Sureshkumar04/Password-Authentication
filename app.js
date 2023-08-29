
const input1 = document.querySelector('.int1');
const input2 = document.querySelector('.int2');
const labelOne = document.querySelector('.pass-label');
const labelTwo = document.querySelector('.Cpass-label');
const inputs = document.querySelectorAll('input')
const btn = document.querySelector('button')
const warnText = document.querySelector('.warning')
const eightchar = document.querySelector('.eightchar')
const finalImg = document.querySelector('#subImg')
const finalText = document.querySelector('.submit p')
const eyebtn = document.getElementById('eye')
const clsShake = document.querySelector('.container')

let inputValue1 = input1.value;
let inputValue2 = input2.value;



input1.addEventListener('input', function() {


  inputValue1 = input1.value;

  if(inputValue1.length > 0){
    labelOne.classList.add("labelAnimation")
  }
  else{
    labelOne.classList.remove("labelAnimation")
  }

  if(inputValue1.length < 8){
    eightchar.textContent = "Password must be at least 8 characters long";
    eightchar.style.color = "red";
    }else{
      eightchar.textContent = "";
    };

  return inputValue1; 
});


input2.addEventListener('input', function() {

  inputValue2 = input2.value;

  if(inputValue2.length > 0){
    labelTwo.classList.add("labelAnimation")
  }else{
    labelTwo.classList.remove("labelAnimation")
  }
  

  return inputValue2;
});

inputs.forEach(input => {
  input.addEventListener('input', () => {         
        if(inputValue1 === inputValue2 && inputValue1.length > 8){
              warnText.innerHTML = "Password Matched &#10003";
              warnText.style.color = "green";
        }else{
            warnText.innerHTML = " Password doesn't Matched &#x2716;";
            warnText.style.color = "red";
          }

          if (inputValue1.length === 0 || inputValue2.length === 0) {
            warnText.innerHTML = '';
          }
      });

  });



eyebtn.addEventListener('click', () => {
  input1.classList.toggle("eye");
  if( input1.classList.contains("eye")){
    input1.type = "text";
    input2.type = "text";
    eyebtn.src = "Closed eye.png";
  }else{
    input1.type = "password";
    input2.type = "password";
    eyebtn.src = "eye.png";
  }

});


btn.addEventListener('click', () => {
  let isValid = true;

  if (input1.value.length < 8) {
    isValid = false;
  };


  if (inputValue1 !== inputValue2) {
    isValid = false;
  }


  if (!isValid) {
    finalImg.src = "cross.png";
    finalText.textContent = "Your Password is not submitted";
    clsShake.classList.add("shake")
  }else{
    clsShake.classList.remove("shake");
    finalImg.src = "tick.png";
    finalText.textContent = "Your Password is submitted";
  };

  function submitvisible(){
    document.querySelector(".submit").classList.add('submit2')
  }

  submitvisible();

});


function submitHide(){
  document.querySelector(".submit").classList.remove('submit2')
  clsShake.classList.remove("shake");

}

