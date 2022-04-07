const word = document.querySelector('#word');
const correctletters = [];
const wrongletters = [];
const popup = document.getElementById('popup-container');
const selectedword = RandomWord();

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
        popup.style.display = 'flex'
    }
}
window.addEventListener('keydown', function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toUpperCase();
        if (selectedword.includes(letter)) {

            if (!correctletters.includes(letter)) {
                correctletters.push(letter);
                DisplayWord();
            } else {

            }
        } else { 
            if(!wrongletters.includes(letter)){
                wrongletters.push(letter);
            }

        }

    }

})

DisplayWord();