const quoteDisplay = document.querySelector('#quote')
const button = document.querySelector('button')


const quotes = [
    'Do something today that your future self will thank you for',
    'Dont worry, be happy!',
    'Your limitation is only your imagination'
]

function showQuote() {

    let rQuotes = Math.random() * quotes.length
    let showQuote = Math.floor(rQuotes)
    let randomItem = quotes[showQuote]

    quoteDisplay.innerHTML = randomItem

}
button.addEventListener('click', showQuote)

