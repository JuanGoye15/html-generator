/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let domains = [".com", ".net", ".us", ".io"];
  let websiteName = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          websiteName.push(pronoun + adj + noun + domain);
        }
      }
    }
  }

  for (let index in websiteName) {
    console.log(websiteName[index]);
  }
};
