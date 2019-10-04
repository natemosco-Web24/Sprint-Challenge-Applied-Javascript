// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    $ = s => document.createElement(s)
    $$ = s => document.querySelector(s)
    $$$ = s => document.querySelectorAll(s)

    let header = $("div")
    header.classList.add("header")
    let span = $("span")
    span.classList.add("date")
    span.textContent = "SMARCH 28, 2019"
    let h1 = $("h1")
    h1.textContent = "Lamda Times"
    let span2 = $("span")
    span2.classList.add("temp")
    span2.textContent = "98˚"

    header.append(span, h1, span2)
    $$(".header-container").append(header)

    return header
}
Header()
