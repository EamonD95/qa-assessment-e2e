const URL = '/'
import 'cypress-drag-drop';


class QuickQuotePage {


  visitQuickQuotePage() {
    cy.viewport(1200, 1600)
    cy.visit(URL)
  }

  elements = {
    cookieBanner: () => cy.get('.cky-consent-bar'),
    cookieBannerRejectButton: () => cy.get('.cky-notice-btn-wrapper > .cky-btn-reject'),
    getQuickQuoteSection: () => cy.get('#qq-formbox'),
    enterRegTextField: () => cy.get('.formbox__form-express > .formbox__input:first'),
    getAQuickQuoteButton: () => cy.get('[datacy="qq-btn-hero"]'),
    lastYearsMileageText: () => cy.get('[datacy="quick-quote-miles"]'),
    quickQuoteYesContinueButton: () => cy.get('.formbox__estimated-mileage-cta-continue'),
    noClaimsBonusDropdownSelector: () => cy.get('[datacy="react-select-ncd--list"]'),
    dateOfBirthDay: () => cy.get('[id="day"]'),
    dateOfBirthMonth: () => cy.get('[id="month"]'),
    dateOfBirthYear: () => cy.get('[id="year"]'),
    driverPostcode: () => cy.get('[id="postcode"]'),
    carInsuranceRenewalDropdown: () => cy.get('[id="react-select-renewal_month--value"]'),
    driverEmailAddress: () => cy.get('[id="email"]'),
    draggableCarVerificationIcon: () => cy.get('img.car')

  }

  monthNameToNumber(monthName) {
    const date = new Date(`${monthName} 1, 2000`);
    const monthNumber = date.getMonth();
    return monthNumber;
  }

  userRejectsCookieBanner() {
    if (cy.get(this.elements.cookieBanner).should('exist')) {
      cy.get(this.elements.cookieBannerRejectButton).contains("Reject all but essential").click()
    }
  }

  assertThatQuickQuoteFormboxExists() {
    cy.get(this.elements.getQuickQuoteSection).should('exist');
  }

  userEntersCarRegstration(Registration) {
    cy.get(this.elements.enterRegTextField).should('be.visible').type(Registration);
  }


  userClicksQuickQuoteButton() {
    cy.get(this.elements.getAQuickQuoteButton).should('be.visible').click();
  }

  captureUsersLastYearsMileage() {
    cy.get(this.elements.lastYearsMileageText).invoke('text').then((text) => {
      cy.setSessionVar(text);
      console.log(text);
    });
  }

  userclicksQuickQuoteYesContinueButton() {
    cy.get(this.elements.quickQuoteYesContinueButton).should('be.visible').click();
  }

  userSelectsNoClaimsBonusFromDropdown(NoClaimsBonus) {
    cy.get(this.elements.noClaimsBonusDropdownSelector).should('be.visible').click();
    cy.get(`[id="react-select-ncd--option-${NoClaimsBonus}"]`).click();
  }

  userEntersDateOfBirth(Day, Month, Year) {
    cy.get(this.elements.dateOfBirthDay).should('be.visible').type(Day);
    cy.get(this.elements.dateOfBirthMonth).should('be.visible').type(Month);
    cy.get(this.elements.dateOfBirthYear).should('be.visible').type(Year);
  }

  userEntersTheirPostcode(Postcode) {
    cy.get(this.elements.driverPostcode).should('be.visible').type(Postcode);
  }

  userSelectsCarInsuranceRenewalMonthFromDropdown(RenewalMonth) {
    const month = this.monthNameToNumber(RenewalMonth);
    cy.get(this.elements.carInsuranceRenewalDropdown).should('be.visible').click();
    cy.get(`[id="react-select-renewal_month--option-${month}"]`).click();
  }

  userEntersTheirEmailAddress() {
    cy.get(this.elements.driverEmailAddress).should('be.visible').type(Math.random(10) + '@mail.com');
  }

  userDragsCarToVerify() {
    cy.get(this.elements.draggableCarVerificationIcon).should('be.visible')
      .trigger('mousedown', { which: 1 }, { force: true })
      .trigger('mousemove', { clientX: 400 }, { force: true })
      .trigger('mouseup', { force: true })
  }
}

export default QuickQuotePage
