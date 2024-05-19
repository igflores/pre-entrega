import { loginPage } from "../support/pages/loginPage"
import { registerPage } from "../support/pages/registerPage"
import { headerPage } from "../support/pages/headerPage"
import { welcomePage } from "../support/pages/welcomePage"
import { onlineShopProductsPage } from "../support/pages/onlineShopProductsPage"
import data from "../fixtures/data/pre-entrega.json"
describe('Actividad complementaria 5', () => { 

    beforeEach("Prcondiciones", () => {
        cy.visit('')
        cy.url().should('include','pushing-it', {timeout: 20000})      
        registerPage.selectIniciaSesionLink()
        loginPage.loginSuccessfully()
        headerPage.get.logoutButton().should('be.visible')
        headerPage.get.welcomeText().should('be.visible')
        welcomePage.selectOnlineShopButton()
        onlineShopProductsPage.get.productTitlePage().should('be.visible')
    })

    it('TC01: Pre-entrega', () => {
        onlineShopProductsPage.addToCardBuzoNegroProduct();
        onlineShopProductsPage.get.messagealertModalHeader().should('be.visible').and('have.text', data.messageAlertProductAdded);
        expect(1).equal(1);
    })
})