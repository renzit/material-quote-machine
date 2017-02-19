var quotes = [
    'There is no knowledge that is not power.',
    'Taking LSD was a profound experience, one of the most important things in my life. LSD shows you that there\'s another side to the coin, and you can\'t remember it when it wears off, but you know it. It reinforced my sense of what was important—creating great things instead of making money, putting things back into the stream of history and of human consciousness as much as I could.',
    'Two of the most famous products of Berkeley are LSD and Unix. I don\'t think that is a coincidence.',
    'As good advertising comes from the product, and good flimmaking begins with a riveting story, good web design starts with content.',
    'Everyone has something to contribute to the World Wide Web. Why? Because the Web is of us. Whatever we are as humans is now manifest in the Web: Our beauty, hatred, fragility, and ferocity; our kindness, cruelty, confusion, and clarity. Our wars. Our peace.'
]

var source = [
    'Mortal Kombat',
    'Steve Jobs',
    'On Book Unix\'s 40th birthday',
    'Jeffrey Zeldman',
    'Molly Holzschlag',
]

var images = [
    'images/featured/astronauta.jpg',
    'images/featured/cat.jpg',
    'images/featured/jump.jpg',
    'images/featured/mountains.jpg',
    'images/featured/street.jpg',
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    document.getElementById('src-img').innerHTML = source[randomNumber];
    document.getElementById("featured-img").src=images[randomNumber];

}


