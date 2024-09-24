
export const landingPageBtn = {
    signIn: 'login',
    createAccount: 'create',
    forgotPassword: 'forgotpassword',
};

class LandingPageGetter{

    getHeaderBtn(btn) {
        return cy.get(`a[href*="customer/account/${btn}"]`);
    };



}
export default LandingPageGetter;