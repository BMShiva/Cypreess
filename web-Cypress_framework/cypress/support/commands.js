Cypress.Commands.add("customLogin", (mobileNumber, OTP, role) => {
	cy.contains("Login").click();
	cy.get("input[type=tel]").type(mobileNumber);
	cy.get("#LoginPage_Continue_NA", { timeout: 2000 }).click();
	cy.scrollTo("bottom", { timeout: 2000 });
	cy.xpath("//input[@type='number']").first().type(OTP);
	cy.scrollTo("bottom", { timeout: 2000 });
	switch (role) {
		case "businessowner":
			cy.xpath("//div[text()='I am the Business Owner']").click();
			break;
		case "admin":
			cy.xpath("//div[text()='I am an Admin']", { timeout: 2000 }).click();
			break;
	}
	cy.xpath("//span[text()='Continue']").click();
	cy.get("input[type='password']").type("P@garB00k");
	cy.xpath("//span[text()='Submit']").click();
});
