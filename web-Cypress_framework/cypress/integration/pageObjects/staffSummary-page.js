class staffSummaryPage {
	addContractualStaff() {
		cy.get("img[alt='add']:first-of-type")
			.should("contain.text", "Add Staff")
			.click();
		cy.xpath("//span[text()='Add Contractual Staff']")
			.should("contain.text", "Add Contractual Staff")
			.click();
		cy.get("div.modalTitle").should("contain.text", "Add Staff");
		cy.get("input[placeholder='Enter Full Name']").type("Monthly_staff");
		cy.get("input[placeholder='Enter Mobile Number']").type("1000000000");
		cy.xpath("//span[text()='Continue']").click();
	}

	logoutUser() {
		cy.wait(1000);
		cy.scrollTo("top");
		cy.get("body").then((body) => {
			if (body.find(body.find(".hamburger ")).length > 0) {
				cy.get(".hamburger ").click();
			}
		});
		cy.get("[alt='profile']").click();
		cy.url().should("include", "/profile");
		cy.get(".pageHeading:first-of-type").should("contain.text", "Profile");
		cy.scrollTo("bottom");
		cy.xpath("//span[text()='Logout']").click();
		cy.xpath("//span[text()='Yes']").click();
		cy.url().should("include", "/login");
	}
}

export default staffSummaryPage;
