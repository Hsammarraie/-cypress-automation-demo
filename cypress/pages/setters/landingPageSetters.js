import LandingPageGetter, { landingPageBtn } from '../getters/landingPageGetter';

const landingPageObj = new LandingPageGetter();

class LandingPageSetter{

    clickOnSignInBtn() {
        landingPageObj.getHeaderBtn(landingPageBtn.signIn)
            .click({ force: true, multiple: true })
    }

    clickOnCreateAccount() {
        landingPageObj.getHeaderBtn(landingPageBtn.createAccount)
            .click({ force: true, multiple: true })
    }



}

export default LandingPageSetter;