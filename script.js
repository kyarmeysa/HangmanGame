const word = document.querySelector('#word');
const correctletters = [];
const wrongletters = [];
const popup = document.getElementById('popup-container');
let selectedword = RandomWord();
const wrongletter = document.getElementById('wrong-letters')
const items = document.querySelectorAll('.item');
const message = document.getElementById('popup-message');
const popupcolor = document.querySelector('.popup');
const mbox = document.getElementById('message') 
const btn  = document.querySelector('#play-again');

function RandomWord() {
    const words = ["PITBULL","DANUA","ROTTWEILER","DOBERMAN","HUSKY","SHEPHERD"];
    return words[Math.floor(Math.random() * words.length)]
}

function DisplayWord() {


    word.innerHTML = `
    ${selectedword.split('').map(letter => `
        <div class="letter">
            ${correctletters.includes(letter) ? letter : ''}
        </div>
    `).join('')}

`;
    const w = word.innerText.replace(/\n/g, '');
    if (w === selectedword) {
        popup.style.display = 'flex';
        message.innerText = 'You Fount The Word!'
    }
}
 
 function UpdateWrongLetters() {
    wrongletter.innerHTML= `
    ${wrongletters.length>0 ? ' <h3>Wrong Letters</h3>': ''}
    ${wrongletters.map(letter => `<span> ${letter} </span>`)}
    `;
    items.forEach((item,index) => {
        const  errorcount = wrongletters.length;
        if(index<errorcount){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }

    })
    if(wrongletters.length=== items.length){
        popup.style.display = 'flex';
        popupcolor.style.background = 'red';
       
        message.innerText = "You Lost Unfortunately, Plaase Try Again"

    }
}
function DisplayMessage(){
    mbox.classList.add('show');
    setTimeout(function(){
        mbox.classList.remove('show');

    }, 2000)

}
btn.addEventListener('click', function(){
    correctletters.splice(0);
    wrongletters.splice(0);
    selectedword = RandomWord();
    DisplayWord();
    UpdateWrongLetters();
    popup.style.display ='none';
    

})

 
   

window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toUpperCase();
        if (selectedword.includes(letter)) {

            if (!correctletters.includes(letter)) {
                correctletters.push(letter);
                DisplayWord();
            } else {
                DisplayMessage();
                

            }
        } else { 
            if(!wrongletters.includes(letter)){
                wrongletters.push(letter);
                UpdateWrongLetters();
            } else{
                DisplayMessage();
            }

        }

    }

})

DisplayWord();