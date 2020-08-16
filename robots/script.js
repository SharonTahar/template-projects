const root = document.getElementById("root"); //connecting to the root
function myfunction() {
	for (i in robots) { //creating a loop to run through robots
		let div = document.createElement("div"); 
		let name = document.createElement("h2");
		let username = document.createElement("p");
		let email = document.createElement("p")
		let img = document.createElement("img")

		//connectng the text to the new created elements 
		name.innerText = robots[i].name;
		username.innerText = robots[i].username;
		email.innerText = robots[i].email;
		img.setAttribute("src", `https://robohash.org/${robots[i].id}?set=set4&size=200x200`);

		//apending them all together inside the new dom div
		div.appendChild(img);		
		div.appendChild(name);
		div.appendChild(username);
		div.appendChild(email);
		root.appendChild(div);
		div.setAttribute('class', 'roby');
	} 
}

//search input 
let input = document.getElementById('search');
input.addEventListener("keyup", searchFun);

function searchFun(event) {
	let unit = event.target.value.toLowerCase();
	let cards = document.getElementsByClassName('roby')
	let newArr = Array.from(cards);
	newArr.forEach((cards) => {
	const title = cards.children[1].innerText;
		if (title.toLowerCase().includes(unit)) {
		cards.style.display = 'block';
		}
		else {
		cards.style.display = 'none'	
		}
	})
	
}