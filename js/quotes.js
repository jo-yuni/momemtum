const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = [
    {
        quote: "It Was Real To Me To.",
        author: "Natasha Romanoff"
    },
    {
        quote: "I Get Emails From A Raccoon. Nothing Sounds Crazy Anymore.",
        author: "Natasha Romanoff"
    },
    {
        quote: "She’s Not Alone.",
        author: "Natasha Romanoff"
    },
    {
        quote: "Thank You For Your Cooperation.",
        author: "Natasha Romanoff"
    },
    {
        quote: "You Get To Make Your Own Choices Now.",
        author: "Natasha Romanoff"
    },
    {
        quote: "Even If There's A Small Chance We Can Undo This, I Mean, We Owe It To Everyone Not In This Room To Try.",
        author: "Natasha Romanoff"
    },
    {
        quote: "I Don't Judge People On Their Worst Mistakes.",
        author: "Natasha Romanoff"
    },
    {
        quote: "I Know You Know I'm Out Here, So Are We Gonna Talk Like Grownups?",
        author: "Natasha Romanoff"
    },
    {
        quote: "Pain only makes us stronger.",
        author: "Natasha Romanoff"
    },
    {
        quote: "And you should know I’m a better shot when I’m pissed off.",
        author: "Natasha Romanoff"
    }
]

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;