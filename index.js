// 15 characters

const firstPassword= document.getElementById("password-one")
const secondPassword = document.getElementById("password-two")
const generate = document.getElementById("generate")


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
"^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function random(){
    randomFigures= []
    for(i=0; i< 16; i++){
        randomFigures.push(characters[Math.floor(Math.random()*characters.length)])
    }
    return randomFigures
}

function clear(){
    firstPassword.textContent = ""
    secondPassword.textContent = ""
}

generate.addEventListener("click",()=>{

    let firstArray = random()
    let secondArray = random()

    clear();

    for(let i=0; i<firstArray.length; i++){
        firstPassword.textContent += firstArray[i]
        secondPassword.textContent += secondArray[i]
    }  
})


