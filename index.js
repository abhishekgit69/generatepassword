const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = ""
let passwordTwo=""
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")

function generatePassword(){
    // reset before generating new
    let passwordOne = "";
    let passwordTwo = "";

    for (let i = 0; i < 15; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length);
        let randomIndex2 = Math.floor(Math.random() * characters.length);

        passwordOne += characters[randomIndex1];
        passwordTwo += characters[randomIndex2];
    }

    password1.textContent = passwordOne;
    password2.textContent = passwordTwo;
}
