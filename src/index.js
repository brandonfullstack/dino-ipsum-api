import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

window.addEventListener("load", function () {
  console.log("project Template");
});

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://dinoipsum.com/api/?format=html&words=10&paragraphs=3');
xhr.onload = function() {
  if (this.status === 200) {
    document.querySelector('#dino-container').innerHTML = this.response;
  } else {
    console.log('Where did all the dinosaurs go?');
  }
};
xhr.send();
