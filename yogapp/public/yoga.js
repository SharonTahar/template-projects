
fetch('/getAllPoses')
.then(response => response.json())
.then(data => {
     getData (data)
    })
.catch(error => {
  console.log(error)
});

let div = document.getElementById("root");

const getData = (data) =>{
    for (i in data) {

        let box = document.createElement('div')
        div.setAttribute('class', 'card');
        box.className = 'box'
        box.setAttribute('class', 'target');

        let poseId = data[i].id

        box.addEventListener('click', function(){
            saveFavorites(poseId)
            box.classList.toggle('show-fav');
        })

        let english = document.createElement('h3')
        english.innerHTML = data[i].english_name

        let sanskrit = document.createElement('h2')
        sanskrit.innerHTML = data[i].sanskrit_name

        let img = document.createElement('img')
        img.setAttribute('src', data[i].img_url)

        box.appendChild(english)
        box.appendChild(sanskrit)
        box.appendChild(img)
        div.appendChild(box)
        
    }
}


function saveFavorites(pose_id) {
    fetch('/myFavorites/' + pose_id)
    .then(response => response.json())
    .then(mydata => {
        getMyData(mydata);
    })
    .catch(error => {
        console.log(error)
    });
} 

const getMyData = (mydata) => {
    for (i in mydata) {
        
    }
    console.log();
}