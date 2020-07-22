document.addEventListener("DOMContentLoaded", () => {
const divDogBar = document.getElementById('dog-bar');

const dogUrl = "http://localhost:3000/pups/";

function dogFetch(){
fetch(dogUrl)
.then(res => res.json())
.then(dog => dog.forEach( dog => displayDog(dog)))

}
dogFetch();



function displayDog(dog){
 spanDog = document.createElement('span');
 spanDog.id = dog.id
 spanDog.innerText = dog.name;
 divDogBar.append(spanDog)
spanDog.addEventListener('click', ()=> {
    
        displayInfo(dog);

});

   
}


 

function displayInfo(dog) {
const dogInfo = document.querySelector('#dog-info');
dogInfo.innerText = '';


let img = document.createElement('img');
    img.src = dog.image;
    dogInfo.appendChild(img);

    let h2 = document.createElement('h2');
    h2.innerText = dog.name;
    dogInfo.appendChild(h2);



let button = document.createElement('button');

button.className = 'goodBad';
if(dog.isGoodDog === true){
    button.innerHTML = "Good Dog!";
} else {
    button.innerHTML = "Bad Dog!";
}
button.addEventListener('click', () => {
  
    changeDog(dog);
    fetch(dogUrl+dog.id,options)
        .then( res => res.json())
        .then(dog => changeDog(dog))
})

dogInfo.appendChild(button);



const options =  {
    method: "POST",
    headers: {
        'content-type' : 'application/json',
        'accept' : 'application/json'
    },
    body: JSON.stringify({
        isGoodDog: !dog.isGoodDog
    })

}

const changeDog = (dog) => {
    if(dog.isGoodDog === true){
        button.innerHTML = "Bad Dog!";
       
    } else {
        button.innerHTML = "Good Dog!";
        
    } }
   
}

});