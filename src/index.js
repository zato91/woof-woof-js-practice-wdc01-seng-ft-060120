document.addEventListener("DOMContentLoaded", () => {

const dogUrl = "http://localhost:3000/pups/";

function fetchDog(){
    fetch(dogUrl)
  .then(response => response.json())
  .then(dogs => dogs.forEach(dog => renderDogList(dog) ));

}

function renderDogList(dog){
    let dogBarDiv = document.getElementById("dog-bar")

    let spanDog = document.createElement('span')
    spanDog.dataset.id = dog.id;
    spanDog.innerText = dog.name;
    dogBarDiv.append(spanDog);

    spanDog.addEventListener("click", ()=>{
        let dogInfo = document.getElementById("dog-info");
        dogInfo.innerHTML= "";

        let img = document.createElement('img')
        img.src = dog.image;
        dogInfo.append(img);

        let h2 = document.createElement('h2')
        h2.innerText = dog.name;
        dogInfo.append(h2);

        let button = document.createElement("button");
        button.classList += "dog-status";
        status(dog, button);
        dogInfo.append(button);

        button.addEventListener('click', (e)=>{

            // dog.isGoodDog = !dog.isGoodDog;
            

            const options = {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json",
                },
                body: JSON.stringify({
                    isGoodDog: dog.isGoodDog = !dog.isGoodDog,
                    
                })
    
        }
        fetch(dogUrl + dog.id, options)
            .then(res => res.json())
            .then(dog => status(dog, button) ) 

        
        });
        

    })

}

 function status(dog, button){
    if (dog.isGoodDog) { 
        button.innerHTML = "Good Dog";
    } else {
        button.innerHTML = "Bad Dog";
    }
 };



fetchDog();
});