class RegisterPage{
    get = {
        iniciaSesionLink: () => cy.get('[data-cy="registertoggle"]')
    }

    goToLiginPage(){
        this.get.iniciaSesionLink().dblclick()
    }
}
export const registerPage = new RegisterPage();