 

   var x=document.getElementById("btn");
   x.addEventListener ("click", validate);
	function validate(event){
		event.preventDefault();
		var input1=document.getElementById("email").value;
		console.log(input1)
		var input2=document.getElementById("psw").value;
		console.log(input2)
		var error=document.getElementById("empty");
		var wrong=document.getElementById("number");
	if((input1==="") && (input2 ==="")){
        error.innerHTML="email cannot be blank";
		wrong.innerHTML="password cannot be blank";
		}
	else if(input1==""){	
		    error.innerHTML="Email cannot be blank";
			input1.style.border="red"
			
			}
		else if(input2==""){
				wrong.innerHTML="password cannot be blank";
				
			}
			
	
	}
	

	function myFunction(){
		var log=document.getElementById("email").value;
		var correct=document.getElementById("psw").value;
		if(log!=="" && correct!==""){
		window.location.href="file:///D:/fabevy/Practice/form-validation/success.html"
		}
		
		
	}
		
		
    	
 
	