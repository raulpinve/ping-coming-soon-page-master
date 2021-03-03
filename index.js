
//Get button
var button = document.getElementById("buttonValidateForm");
var email = document.getElementById("email-input"); 
var alertErrorEmail = document.getElementById("alert-error-email");

//add EventListener
button.addEventListener("click", function(e){
 
   e.preventDefault();   

   validarEmail();  
   
})

email.addEventListener("keyup", function(){ 

    validarEmail();  

})


function validarEmail() {

    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    valor = regex.test(email.value) ? true : false;  

    if(valor){

        alertErrorEmail.style.display= "none";  
        email.style.borderColor = "rgba(79, 125, 243,0.4)"; 

   }else{
        email.style.borderColor = "hsl(354, 100%, 66%)"; 
        alertErrorEmail.style.display= "block";        

   }

}