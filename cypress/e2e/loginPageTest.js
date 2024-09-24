///<reference types="Cypress"/>
import LandingPageSetter from "../pages/setters/landingPageSetters";

const landingPageObj = new LandingPageSetter()

describe('Sample Test', () => {
    it('Visits the demo site', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
      landingPageObj.clickOnSignInBtn()
      landingPageObj.clickOnCreateAccount()
    });
  });