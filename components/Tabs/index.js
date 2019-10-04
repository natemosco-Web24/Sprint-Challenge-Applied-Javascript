// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
$ = s => document.createElement(s)
$$ = s => document.querySelector(s)
$$$ = s => document.querySelectorAll(s)
function Tab(str) {
    let tab = $("div")
    tab.classList.add("tab")
    tab.textContent = str
    return tab

}
axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(res => {
        console.log("response tabs axios", res)
        topics = res.data.topics
        topics.map(topic => {
            $$(".topics").append(Tab(topic))
        })
    })
    .catch(err => {
        console.log("error in tabs axios", err)
    })