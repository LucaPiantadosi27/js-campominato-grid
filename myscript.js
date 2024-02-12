// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità 

// ---------------------------- //

// creo un bottone che genera la griglia di gioco quadrata
const  gridElement = document.getElementById('grid');
const  playButton = document.getElementById('play');

// Azione button play
playButton.addEventListener('click', function () {
    generateGrid(gridElement);
} )



function generateGrid(container) {
    container.innerHTML = '';
for (let i = 0; i < 100; i ++) {
    const cellElement = generateCell(i);  
    container.append(cellElement);
}
}

function generateCell(cellNumber)  {
const cella = document.createElement('div');
cella.classList.add('cella');

// assegno alle celle un numero da 1 a 100 progressivo da disporre 10x10
cella.innerText = cellNumber; 


//  ogni cella  quando clicco, diventa colore azzurro
cella.addEventListener('click', function() {
    cella.classList.toggle('cellacolorata');

//   stampo in console il numero della cella cliccata
    console.log(cellNumber);
    
    if (bombe.includes(cellNumber)) {
        cella.classList.add('bombacalpestata');
        setTimeout(function() { alert("GAME OVER"); }, 100);

    } else {
        cella.classList.add('cellacolorata');                        
    }

})
return cella;
}


//Bombe 
let bombe = [];


while (bombe.length < 16)
{
    let number = Math.floor(Math.random() * 100 + 1 );
    if (!bombe.includes(number)) {
        bombe.push(number);
}

}
console.table(bombe);
