//Yoga studio app
//adding current date and time
let main = document.querySelector('#date')
let today = new Date();
let date = today.getDate()+'-'+ (today.getMonth()+1) + '-' + today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = document.createElement('p');
dateTime.innerHTML = date+'<br>'+time;
main.appendChild(dateTime);

//adding background sound
// document.getElementById("mySource").onerror = event => {
// 	var sourceElement = event.target;
// 	var audioURL = sourceElement.getAttribute("src");

// 	fetch(audioURL).then(function(response) {
// 		alert(response.status);
// 	});
// };

// quotes url 
//displaying data for quotes
async function displayQuote(){
    try {
    let response = await fetch(`https://type.fit/api/quotes`);
    let data = await response.json()
        return data
    }
        //display the quote of that index
        // let div=document.querySelector('#quote');
        // let quote=`<div class="card">
        // <p>${data[index].text}</p>
        // <p>${data[index].author}</p>
        // </div>`;
        // div.innerHTML=quote;
    catch(err) {
        throw new Error('err')
        }
}

//appending the data on the div
function getData(data) {
    let index = Math.floor(Math.random()*21);
    let div = document.querySelector('#quote');
    div.setAttribute("class","card");
    div.innerHTML = '';

    const quote = document.createElement('p');
    quote.innerHTML = data[index].text;
    div.appendChild(quote);

    const author = document.createElement('h3');
    author.innerHTML = data[index].author;
    div.appendChild(author);

}

//Adding yoga API
function displayYoga(){
        try {
            let yogaJson= yogaString.JSON()
            console.log(yogaJson); 
        }
    catch(err) {
        throw new Error('err')
        }
}

function getYoga(yogaJson) {
    let i = Math.floor(Math.random()*100);
    let yogdiv=document.querySelector('#yoga');
    let yoga=`<div class="card">
    <p>${yogaJson[i]}</p>
    </div>`;
    yogdiv.innerHTML=yoga;
}

//button events
let btn=document.querySelector('.button');
btn.addEventListener('click', function(){
    displayQuote()
    .then(data =>{
        getData(data)
    })
    .catch(err =>{
        console.log(err)
    })
});


//creating both events with one button
// document.getElementById('btn').addEventListener('click', function(event) {
//     getData();
//     });

// document.getElementById('btn').addEventListener('click', function(event) {
//     getYoga(); 
//     });
    
// ['click','ontouchstart'].forEach( evt => 
//         btn.addEventListener(evt, dosomething, false)
//     );
