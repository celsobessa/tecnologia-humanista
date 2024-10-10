//TODO: present thank you message to user after click and disable kudos button to avoid multiple kudos in the same view/visit;
"use strict";

/**
 * Handle click events
 * @param  {Event} event The event object
 */
var clickHandler = async function (event) {

	// Only run on kudos-anchor elementor
	let k = event.target.className;
	if ( k.includes('kudos') == false){
        return;
    };


    await registerAction(
      "https://3j2jrsdxtdf4xsx54m2rrdfdn.canarytokens.com?content=xpto2"
    )
      .catch((error) => {
        console.log(`error when calling registerAction from clickHandler`);
        console.log(`still, probably recorded the canarytoken via DNS resolve`);
        return "error when calling registerAction from clickHandler";
      })
      .then((response) => {
        console.log(`response is`);
        console.log(response);
        return "kudos registered";
      });
};

/**
 * Register an action (e.g. pageview, kudos, etc) using a canary token
 * @param  {Event} event The event object
 */
const registerAction = async function(tokenUrl){
    await window
    .fetch(tokenUrl)
    .catch((error) => {
        console.log(`error on request for tokenUrl ${tokenUrl}`);
        console.log(`still, probably recorded the canarytoken via DNS resolve`);
        throw new Error(error);
    })
    .then((response) => {
        console.log(`response is`);
        console.log(response);
        return 'registered';
    });
};


window.addEventListener(
  "load",
  registerAction(
    "https://s9b6ctdx97ifblqa5jjo5ju2r.canarytokens.com?content=xpto"
  )
);
document.addEventListener("click", clickHandler);
