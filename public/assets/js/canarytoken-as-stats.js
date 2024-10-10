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

    try {
        await registerView(
          "https://3j2jrsdxtdf4xsx54m2rrdfdn.canarytokens.com?content=xpto2"
        ).catch((err) => {
          console.error(err);
          return "default response";
        });
    } catch (error) {
      console.log(`error for click hander is`);
      console.log(err);
    }
};

/**
 * Register a pageview on windows load
 * @param  {Event} event The event object
 */
const registerView = async function(tokenUrl){
window
  .fetch(tokenUrl)
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

window.addEventListener(
  "load",
  registerView(
    "https://s9b6ctdx97ifblqa5jjo5ju2r.canarytokens.com?content=xpto"
  )
);
document.addEventListener("click", clickHandler);
