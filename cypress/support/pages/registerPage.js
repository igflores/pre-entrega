class RegisterPage{
    get = {
        iniciaSesionLink: () => cy.get('[data-cy="registertoggle"]')
    }

    selectIniciaSesionLink(){
        this.get.iniciaSesionLink().dblclick()
    }
}
export const registerPage = new RegisterPage();