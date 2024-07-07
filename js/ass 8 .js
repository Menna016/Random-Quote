const quoteElement = document.getElementById("quote");
const qAuthor = document.getElementById("quotesAuthor");

//! array of quote objects
const quotes = [
    {
        text: "“The only way to do great work is to love what you do.”",
        author: " -- Steve Jobs"
    },
    {
        text: "“So many books, so little time.”",
        author: " -- Frank Zappa"
    },
    {
        text: "“Don't be afraid to give up the good to go for the great.”",
        author: " -- John D. Rockefeller"
    },
    {
        text: "“Success is not final, failure is not fatal: It is the courage to continue that counts.”",
        author: " -- Winston Churchill"
    },
    {
        text: "“The future belongs to those who believe in the beauty of their dreams.”",
        author: " -- Eleanor Roosevelt"
    },
    {
        text: "“Life is what happens when you're busy making other plans.”",
        author: " -- John Lennon"
    },
    {
        text: "“In three words I can sum up everything I've learned about life: It goes on.”",
        author: " -- Robert Frost"
    },
    {
        text: "“You only live once, but if you do it right, once is enough.”",
        author: " -- Mae West"
    },
    {
        text: "“Believe you can and you're halfway there.”",
        author: " -- Theodore Roosevelt"
    },
    {
        text: "“Be yourself; everyone else is already taken.”",
        author: " -- Oscar Wilde"
    }
];

//! <button id="generateButton" onclick="generateRandomQuote()">
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex].text;
    qAuthor.textContent = quotes[randomIndex].author;
}
