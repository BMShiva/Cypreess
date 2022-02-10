import LoginPage from "../pageObjects/login-page";
import StaffSummaryPage from "../pageObjects/staffSummary-page";
var testData = require("../../fixtures/testdata");

describe("Onboarding Staffs", () => {
	const login = new LoginPage();
	const profile = new StaffSummaryPage();

	before(function () {
		cy.visit(Cypress.env("url"));
		cy.customLogin(testData.mobileNumber, testData.OTP, "businessowner");
	});

	beforeEach(function () {});

	it("Login as different staff", function () {
		profile.addContractualStaff();
	});

	afterEach(function () {
		// profile.logoutUser();
	});
});
