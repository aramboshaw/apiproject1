

const newFact = document.querySelector('#factButton');

const loadNew = () => {
  location.reload();
}

newFact.addEventListener('click', loadNew)


let facts = document.querySelector('h1');



fetch('https://cat-fact.herokuapp.com/facts/random') 
.then(function(response) {   
  return response.json(); 
})

.then(function(json) {
    return json.text;
})


.then(function(text) {
    let wholeFact = document.createElement('p')
    if (text.length > 32) {
    wholeFact.innerText = text;
    } else if(text.length >= 300) {
    wholeFact.innerText = "Gibberish!";  
    } else  {
    wholeFact.innerText = "Gibberish!";
    }


    facts.append(wholeFact);
});



