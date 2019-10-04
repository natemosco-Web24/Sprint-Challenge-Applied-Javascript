/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
$ = s => document.createElement(s)
$$ = s => document.querySelector(s)
$$$ = s => document.querySelectorAll(s)
function CarouselMaker() {

  let carousel = $("div")
  carousel.classList.add("carousel")

  let buttonLeft = $("div")
  buttonLeft.classList.add("left-button")

  let img = $("img")
  img.src = "./assets/carousel/mountains.jpeg"
  img.classList.add("display")

  let img2 = $("img")
  img2.src = "./assets/carousel/computer.jpeg"

  let img3 = $("img")
  img3.src = "./assets/carousel/trees.jpeg"

  let img4 = $("img")
  img4.src = "./assets/carousel/turntable.jpeg"

  let buttonRight = $("div")
  buttonRight.classList.add("right-button")

  carousel.append(buttonLeft, img, img2, img3, img4, buttonRight)

  $$(".carousel-container").appendChild(carousel)

  let images = $$$("img")
  let count = 0
  buttonLeft.addEventListener("click", () => {
    console.log("left click")
    $$(".display").classList.toggle("display")
    count = (count == 0) ? images.length - 1 : count - 1;
    images[count].classList.toggle("display")
  })
  buttonRight.addEventListener("click", () => {
    console.log("right click")
    $$(".display").classList.toggle("display")
    count = (count == images.length - 1) ? 0 : count + 1;
    images[count].classList.toggle("display")
  })


  return carousel
}
CarouselMaker()