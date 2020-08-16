let button = document.querySelector('#clickMe');
let div = document.createElement("div");
let name = document.createElement("h2");
let height = document.createElement("p");
let gender = document.createElement("p");
let birth_year = document.createElement("p");
let home_world = document.createElement("p");
let xhr = new XMLHttpRequest();

function displayChar() {
    loading()
    let randomNumber = Math.floor(Math.random() * 83);
    let apiURL = 'https://swapi.dev/api/people/' + randomNumber + '/';
    
    xhr.open('get', apiURL);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('error');
        } else {
            myfunction(xhr.response);
        }
    }    
    // xhr.onerror = function() {
    //     console.log(`Network Error`);
    // };
}

let frame = document.getElementById('frame');

    function myfunction(characters) {
        console.log(characters)

        let url = new URL(characters.homeworld);
        url.protocol = 'https:'
        xhr.open('get', url.href);

        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log('error');
            } else {
                myfunction2(xhr.response);
            }
        } 

        name.innerText = characters.name;
        height.innerText = characters.height;
        gender.innerText = characters.gender;
        birth_year.innerText = characters.birth_year;
        home_world.innerText = characters.home_world;
        frame.appendChild(name);
        frame.appendChild(height);
        frame.appendChild(gender);
        frame.appendChild(birth_year);
        frame.appendChild(home_world);
    }


function myfunction2(re) {
    home_world.innerText = `Home World: ${re.name}`;
};

button.addEventListener('click', displayChar);

function loading() {
    name.innerHTML = `<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i> <p>Loading...</p>`;
    height.innerText = '';
    gender.innerText = '';
    birth_year.innerText = '';
    home_world.innerText = '';
};

