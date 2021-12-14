// JavaScript Document

var zon = document.querySelector("#zonnestelsel1");
var mercurius = document.querySelector("#mercurius");
var venus = document.querySelector("#venus");
var aarde = document.querySelector("#aarde");
var mars = document.querySelector("#mars");
var jupiter = document.querySelector("#jupiter");
var saturnus = document.querySelector("#saturnus");
var uranus = document.querySelector("#uranus");
var neptunus = document.querySelector("#neptunus");

// wijzigingen
zonnestelsel1.addEventListener("change", aliensTonen);
mercurius.addEventListener("change", aliensTonen);
venus.addEventListener("change", aliensTonen);
aarde.addEventListener("change", aliensTonen);
mars.addEventListener("change", aliensTonen);
jupiter.addEventListener("change", aliensTonen);
saturnus.addEventListener("change", aliensTonen);
uranus.addEventListener("change", aliensTonen);
neptunus.addEventListener("change", aliensTonen);

// functie
function aliensTonen(event) {
  let deNieuweAliens = event.target.id;
  
  let alleAliens = document.querySelector("ul.aliens");
  
  alleAliens.classList.remove("mercurius");
  alleAliens.classList.remove("venus");
  alleAliens.classList.remove("aarde");
  alleAliens.classList.remove("mars");
  alleAliens.classList.remove("jupiter");
  alleAliens.classList.remove("saturnus");
  alleAliens.classList.remove("uranus");
  alleAliens.classList.remove("neptunus");
 
  alleAliens.classList.add(deNieuweAliens);

  
}


// footer: datum van vandaag
var vandaag = new Date();
var datum = `${vandaag.getDate()}-${vandaag.getMonth() + 1}-${vandaag.getFullYear()}`;
document.getElementById("datum").innerHTML = datum;


