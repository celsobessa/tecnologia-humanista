"use strict";

const registerVisit = async function(event){
window
  .fetch("https://s9b6ctdx97ifblqa5jjo5ju2r.canarytokens.com")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    console.log(`response is`);
    console.log(response);
  });
};

addEventListener("load", registerVisit(event));
