import StaffSummaryPage from "./staffSummary-page";

class LoginPage {
	loginbtn() {
		cy.contains("Login", { timeout: 2000 }).click();
		return this;
	}

	enterMobileNumber(mobileNumebr) {
		cy.get("input[type=tel]", { timeout: 2000 }).type(mobileNumebr);
		cy.get("#LoginPage_Continue_NA", { timeout: 2000 })
			.should("be.visible")
			.click();
		return this;
	}

	enterOTP(OTP) {
		cy.scrollTo("bottom", { timeout: 2000 });
		cy.get("#OTPPage_Continue_NA").should("be.visible");
		cy.xpath("//input[@type='number']").first().type(OTP);
		return this;
	}

	loginToBusiness(role) {
		cy.scrollTo("bottom", { timeout: 2000 });
		switch (role) {
			case "businessowner":
				cy.xpath("//div[text()='I am the Business Owner']")
					.should("be.visible")
					.click();
				break;
			case "admin":
				cy.xpath("//div[text()='I am an Admin']", { timeout: 2000 })
					.should("be.visible")
					.click();
				break;
		}
		cy.xpath("//span[text()='Continue']").click();
		this.handleUATpassword();
		cy.url().should("include", "/staff");
		return new StaffSummaryPage();
	}

	handleUATpassword() {
		cy.get("input[type='password']").type("P@garB00k");
		cy.xpath("//span[text()='Submit']").click();
	}
	verifyInvalidOtp() {
		cy.get("span.text", { timeout: 2000 }).should(
			"contain.text",
			"The OTP code is invalid"
		);
	}
}
export default LoginPage;
