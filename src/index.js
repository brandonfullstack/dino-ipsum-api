import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getDinos(words, paragraphs) {
  // let request = new XMLHttpRequest();
  const url = `https://dinoipsum.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => printElements(data))
    .catch(err => console.log(err))

  // request.addEventListener("loadend", function () {
  //   const response = JSON.parse(this.responseText);
  //   console.log(response)
  //   if (this.status === 200) {
  //     printElements(response);
  //   }
  // });

  // request.addEventListener("readystatechange", function () {
  //   console.log(this.readyState);
  // });

  // request.open("GET", url, true);
  // request.send();
}

// UI Logic

// {getDinos().map(dino => (
//   <p>
//     {dino}
//   </p>
// ))}

function printElements(response) {
  const formattedResponse = response.map(array => array.join(", ")).join("<br><br>");
  document.querySelector('#dino-container').innerHTML = formattedResponse;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const words = document.querySelector('#words').value;
  const paragraphs = document.querySelector('#paragraphs').value;
  document.querySelector('#words').value = null;
  document.querySelector('#paragraphs').value = null;
  getDinos(words, paragraphs);
}

window.addEventListener("load", function () {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});


// [["Majungasaurus", "Suzhousaurus", "Eoabelisaurus", "Jeholosaurus"],
// ["Coloradisaurus", "Notocolossus", "Parvicursor", "Huaxiaosaurus"],
// ["Orosaurus", "Revueltosaurus", "Patagotitan", "Clarencea"], ["Troodon", "Laquintasaura", "Tichosteus", "Hulsanpes"],
// ["Antetonitrus", "Horshamosaurus", "Udanoceratops", "Bradycneme"]
// ]