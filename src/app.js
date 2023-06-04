/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  myWebsite();
};

const myWebsite = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".us", ".io"];

  let element = pronoun[Math.floor(Math.random() * pronoun.length)];
  element += adj[Math.floor(Math.random() * adj.length)];
  element += noun[Math.floor(Math.random() * noun.length)];
  element += domain[Math.floor(Math.random() * domain.length)] + " ";
  document.getElementById("website").innerHTML = element;
};
