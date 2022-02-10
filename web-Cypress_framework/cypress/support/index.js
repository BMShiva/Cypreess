// Import commands.js using ES2015 syntax:
import "./commands";

// Add screenshot to mochawsome reports
import addContext from "mochawesome/addContext";

Cypress.on("uncaught:exception", (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});

Cypress.on("test:after:run", (test, runnable) => {
	if (test.state === "failed") {
		const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
		addContext({ test }, screenshot);
		addContext({ test }, `assets/videos/${Cypress.spec.name}.mp4`);
	}
});

//Helps to add Xpath in the script
require("cypress-xpath");
