const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]




const passOne = document.getElementById('passOne')
const passTwo = document.getElementById('passTwo')
 const quantity = document.getElementById('quantity').value

// let quantity = "5"

let add = ""

function getnum(){
    const quantity = document.getElementById('quantity').value
    let quanNum = parseFloat(quantity);
    return quanNum
}


function renderPass() {
    passOne.textContent = createpass()     
}

function rand(){
    const sum = Math.floor(Math.random() * characters.length)
    return characters[sum] 
}


function createpass(){
    let add = ""
    for(let i = 0; i < getnum(); i++){       
          add += rand()
       }
         return add
       
    }




