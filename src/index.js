import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getDinos(words, paragraphs) {
  let request = new XMLHttpRequest();
  const url = `https://dinoipsum.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response);
    }
  });

  request.addEventListener("readystatechange", function() {
    console.log(this.readyState);
  });

  request.open("GET", url, true);
  request.send();
}

// UI Logic

function printElements(response) {
  document.querySelector('#dino-container').innerHTML = response;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const words = document.querySelector('#words').value;
  const paragraphs = document.querySelector('#paragraphs').value;
  document.querySelector('#words').value = null;
  document.querySelector('#paragraphs').value = null;
  getDinos(words, paragraphs);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});