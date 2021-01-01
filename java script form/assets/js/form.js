function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// document.getElementById("btn").addEventListener("click", myFunction);

function myFunction(){
	var name = document.frm.name.value;
    var phnnum = document.frm.phnnum.value;
    var dob = document.frm.dob.value;
    var email  = document.frm.email.value;
    var gender = document.frm.gender.value;
    var language = document.frm.language.value;
    var state = document.frm.state.value;
    var address = document.frm.address.value;
    var myfile = document.frm.myfile.value;
    // console.log(name);
    console.log(language);
    	var nameErr = true;
    if(name == "") {
        printError("nameErr","Please enter your Name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    function myfunction(){
    var flag = 0;
    for (var i = 0; i< 2; i++) {
      if(document.myform["language"][i].checked){
        flag ++;
      }
    }
    if (flag != 1) {
      alert ("You must check one and only one checkbox!");
      return false;
    }
    return true;
    }
    if(phnnum == "") {
        printError("phoneErr", "Please enter your phoneno number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(phnnum) === false) {
            printError("phoneErr", 
            	"Please enter a valid 10 digit phoneno number");
        } else{
            printError("phoneErr", "");
            phoneErr = false;
        }
    }
    if(email == "") {
        printError("emailErr", "Please enter your email");
    } else {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
        // var regex = /^([a-zA-Z\d\.-]+)@([a-z]+)\.([a-z])$/
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    // if(language == "") {
    //     printError("languageErr", "Please select your language");
    // } else {
    //     printError("languageErr", "");
    //     langugaeErr = false;
    // }

    if(state == "") {
        printError("stateErr", "Please Select your State");
    } else {
        printError("stateErr", "");
        stateErr = false;
    }

    if(myfile == "") {
        printError("fileErr", "Please choose a file");
    } else {
        printError("fileErr", "");
        fileErr = false;
    }

    if(dob == "") {
        printError("dobErr", "Please enter your date of birth");
    } else {
        printError("dobErr", "");
        ageErr = false;
    }

    if(textarea == "")
    	printError("addressErr","Please enter your address");
    
    // }else {
    // 	var regex = /^[a-zA-Z/d.-,]$/;
    // 	if (regex.test(address) == false) {
    // 		printError("addressErr","Please enter valid address");
    // 	}else{
    // 		printError("addressErr","");
    // 		addressErr = false;
    // 	}
    // }
    // if (nameErr  == false ||  emailErr == false || phoneErr == false
    //   	|| ageErr == false || genderErr == true || residenceErr == true
    //     dobErr == false || stateErr == false || addressErr == false
    //     || fileErr == false)
    //     return false;
}
// btn.addEventListener("click", myFunction);
// btn.addEventListener("click",markPress);
function markPress(e){
    if (!(e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 &&
     e.keyCode <= 105)) {
        e.preventDefault();
    }
}
function eventName(eve){
	 if(!(eve.keyCode >= 65 && eve.keyCode <= 90)){
	 	eve.preventDefault();
	 }
}

    