function validate(number, theClass){
        if(number>=5){
            
             document.getElementsByClassName(theClass)[0].style.visibility = 'visible';
        }
        else
        {
           document.getElementsByClassName(theClass)[0].style.visibility = 'hidden';
           
    }
        }
        
        
 function total(babyHat_value)
 {      
     
     var message = "Your total is " + babyHat_value; 
 window.alert(message);
 }
 
 function reset()
  {
   document.getElementById('babyHat').focus = null; 
   document.getElementById('teddyBear').focus = null;
   document.getElementById('monkeyHat').focus = null; 
   document.getElementById('elephant').focus = null; 
    document.getElementById('first_name').focus = null; 
   document.getElementById('last_name').focus = null;
   document.getElementById('address').focus = null; 
   document.getElementById('email_form').focus = null; 
    document.getElementById('telephone').focus = null; 
   document.getElementById('creditCard').focus = null;
   document.getElementById('creditNumber').focus = null; 
   document.getElementById('creditDate').focus = null; 
  }
  
  function myFunction(theId) {
    var x = document.getElementById(theId);
    x.value = x.value.toUpperCase();
}

function submitDone() {
    alert("The form was submitted");
}

function resetDone() {
    alert("The form was reset");
}

function loaded() {
    alert("Page is loaded");
}
