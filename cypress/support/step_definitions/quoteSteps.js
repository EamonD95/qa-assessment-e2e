import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import QuickQuotePage from '../pages/quickQuotePage'

let quickQuotePage = new QuickQuotePage()

// Given steps

Given('I am on the quick quote page', () => {
  quickQuotePage.visitQuickQuotePage();
  quickQuotePage.userRejectsCookieBanner();
  quickQuotePage.assertThatQuickQuoteFormboxExists();
})

// When steps
// When('I enter the registration number {string}', (Registration) => {
//   quickQuotePage.userEntersCarRegstration(Registration);
// })

When('I enter the registration number {string}', (Registration) => {
  quickQuotePage.userEntersCarRegstration(Registration);
})


And('click the Get a Quick Quote button', () => {
  quickQuotePage.userClicksQuickQuoteButton();
  quickQuotePage.captureUsersLastYearsMileage();
})

And('click the Yes, Continue button', () => {
  quickQuotePage.userclicksQuickQuoteYesContinueButton();
})

And('enter my No claims bonus {string}', (NoClaimsBonus) => {
  quickQuotePage.userSelectsNoClaimsBonusFromDropdown(NoClaimsBonus);
})

And('enter my date of birth {string} {string} {string}', (Day, Month, Year) => {
  quickQuotePage.userEntersDateOfBirth(Day, Month, Year);
})

And('enter my postcode {string}', (Postcode) => {
  quickQuotePage.userEntersTheirPostcode(Postcode);
})

And('enter my Car Insurance renewal month {string}', (RenewalMonth) => {
  quickQuotePage.userSelectsCarInsuranceRenewalMonthFromDropdown(RenewalMonth);
})

And('enter my email address', () => {
  quickQuotePage.userEntersTheirEmailAddress();
})

And('complete the robot verificaton', () => {
  quickQuotePage.userDragsCarToVerify();
})

// Then steps

