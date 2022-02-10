import LoginPage from "../pageObjects/login-page";
import StaffSummaryPage from "../pageObjects/staffSummary-page";
var testData = require("../../fixtures/testdata");

describe("Login or Signup Flows", () => {
	const login = new LoginPage();
	const profile = new StaffSummaryPage();

	before(function () {});

	beforeEach(function () {
		cy.visit(Cypress.env("url"));
	});

	it("Login as Business owner", function () {
		login
			.loginbtn()
			.enterMobileNumber(testData.mobileNumber)
			.enterOTP(testData.OTP)
			.loginToBusiness("businessowner")
			.logoutUser();
	});

	it("Login as Admin", function () {
		login
			.loginbtn()
			.enterMobileNumber(testData.mobileNumber)
			.enterOTP(testData.OTP)
			.loginToBusiness("admin")
			.logoutUser();
	});

	it("Verify invalid otp", function () {
		login
			.loginbtn()
			.enterMobileNumber(data.mobileNumber)
			.enterOTP(data.invalidOTP);
	});
});
