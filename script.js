const word = document.querySelector('#word');
const correctletters= ['R', 'T','O','W','E','I','L'];
const wrongletters=[];

function RandomWord(){
    const words = ["CANE CORSO","GREAT DANE","ROTTWEILER","DOBERMAN","HUSKY","GERMANY SHEPHERD"]
    return words[Math.floor(Math.random()* words.length)]
}

function DisplayWord(){
    const selectedword =RandomWord();
   
    word.innerHTML = `
    ${selectedword.split('').map(letter => `
        <div class="letter">
            ${correctletters.includes(letter)? letter : ''}
        </div>
    `).join('')}

`;
const w = word.innerText.replace(/\n/g,'');
if(w === selectedword){
    console.log('You Found The Word!')
}
}

DisplayWord();