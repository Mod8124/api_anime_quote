let quoteA = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

function randomQuote() {
    
        fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(
                function(quote) {
                        quoteA.innerHTML = quote.quote;
                        author.innerHTML = quote.character;
                }
        ) 
}

btn.addEventListener('click', randomQuote);



