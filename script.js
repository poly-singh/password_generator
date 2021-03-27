var generateBtn = document.querySelector("#generate");
//array for uppercase letters//
upppercase_letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//array for lowercase letters//
lowercase_letters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//array for special characters//
symbols=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//array for numbers//
num=[0,1,2,3,4,5,6,7,8,9];
//variables
var values;
var confirmNumber;
var confirmLowercase;
var confirmUppercase;
var confirmsymbols;

//to generate password//
function generatePassword() {
  values=parseInt(prompt("How many characters would you like in the password?choose between 8 and 128"));
  if(!values){
    alert("Please enter a value");
  }
  else if(values < 8 || values > 128){
    alert("Value must be between 8 and 128");
  }
  else if (values >=8 && values <=128){
    confirmNumber=confirm("Do you want it to have numbers?");
    confirmUppercase=confirm("Do you want it to have Uppercase letters");
    confirmLowercase=confirm("Do you want it to have lowercase letters");
    confirmsymbols=confirm("Do you want it to have symbols");

    if(!confirmNumber && !confirmUppercase && !confirmLowercase && !confirmsymbols){
      alert("You must choose one of them");
    }
  }
    var options=[]
    if(confirmNumber){
      options=options.concat(num);
    }
    if(confirmUppercase){
      options=options.concat(upppercase_letters);
    }
    if(confirmLowercase){
      options=options.concat(lowercase_letters);
    }
    if(confirmsymbols){
      options=options.concat(symbols);
    }
  
    var generated_password=[];
    for (var i=0;i < values;i++){
      generated_password.push(options[Math.floor(Math.random() * options.length)]);
    }
    return generated_password.join("");
   
}
//writes password to the text area//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


