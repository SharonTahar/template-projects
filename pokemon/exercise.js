// //pokemon mini project
// //declare var 
let button = document.querySelector('#btn');
let div = document.getElementById("display");

//function for fetch urls +async await 
async function getPoke() {
  try {
  let randomNumber = Math.floor(Math.random() * 900)
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + randomNumber + `/`);
  let data = await response.json()
    return data;   
  }
  catch(err) {
    throw new Error('err')
  }
} 

function getData(data) {
  console.log(data)
  div.innerHTML ='';
  
  const img = document.createElement('img')
  img.setAttribute('src', data.sprites.back_default)
  div.appendChild(img);
  const nameHeader = document.createElement('h2')
  nameHeader.innerText = data.name
  div.appendChild(nameHeader)                                                                                                                                                                                                                                                                                                                   
}

button.addEventListener('click', function(){
  getPoke()
  .then(data =>{
    getData(data)
  })
  .catch(err =>{
    console.log(err)
  })
});

// //creating elements and appending them 

// //2 buttons for previous and next +async await 
// //function for loading to add 
