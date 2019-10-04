// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
$ = s => document.createElement(s)
$$ = s => document.querySelector(s)
$$$ = s => document.querySelectorAll(s)
function Cards(obj) {
    let card = $("div")
    card.classList.add("card")
    let div = $("div")
    div.classList.add("headline")
    div.textContent = "headline"
    let div2 = $("div")
    div2.classList.add("author")
    let div3 = $("div")
    div3.classList.add("img-container")
    let img = $("img")
    img.src = "url"
    let span = $("span")
    span.textContent = `By authorname`

    card.append(div, div2)
    div2.append(div3, span)
    div3.append(img)

    return card
}
