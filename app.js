function passwordGenerator(length = 10){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    //chars line is copied from chatgpt
    let password ="";
    for(let i=0; i<length; i++){
        password+= chars.charAt(Math.floor(Math.random()*chars.length));
    }
    return password;
}

function passwordValidator(password){
    const minLength=4;
    const maxLength=10;
    let hasUpper= false;
    let hasLower= false;
    let hasNumber= false;
    let hasSymbol= false;
    let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";//this also
    if(password.length<minLength || password.length>maxLength){
        return false;
    }
    for(let i=0; i<password.length; i++){
        const ch= password[i];
        if(ch>='A' && ch<='Z') 
            {hasUpper=true;

            }
        else if(ch>='a' && ch<='z') {
            hasLower=true;
        }
        else if(ch>='0' && ch<='9'){

        hasNumber=true;
        }
        else if(symbols.includes(ch)){ hasSymbol=true;
        }
    }
    return hasUpper && hasLower && hasNumber && hasSymbol;
}

function validatePasswordGame(){
    let count =3;
    let a= prompt("please enter your name");
    while(true){
        let b= prompt("please enter your password");
        if(passwordValidator(b)){
            alert("valid password");
            break;
        }
        else{
            alert("invalid password . your password doesnt fulfill any requirement of strong password , try again");
            count--;
            if(count===0){
                let suggestion= prompt(`do you want some suggestion for strong password ${a}? yes/no`);
                if(suggestion.toLowerCase()==="yes"){
                    const newPassword= passwordGenerator();
                    alert(`${a} here is your recommended password : ${newPassword}`);
                }
                count=3;
            }
        }
    }
}

validatePasswordGame();
 