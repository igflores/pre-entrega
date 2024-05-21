import { loginPage } from "../support/pages/loginPage"
import { registerPage } from "../support/pages/registerPage"
import { headerPage } from "../support/pages/headerPage"
import { welcomePage } from "../support/pages/welcomePage"
import { productListPage } from "../support/pages/productListPage"
import { shoppingCartPage } from "../support/pages/shoppingCartPage"
import data from "../fixtures/data/pre-entrega.json"
describe('Actividad complementaria 5', () => { 

    beforeEach("Prcondiciones", () => {
        //Navigate to Pushing IT Register page
        cy.visit('')
        cy.url().should('include','pushing-it')      
        //Navigate to Pushing IT Log in page
        registerPage.goToLiginPage()
        loginPage.get.registrateLink().should('be.visible')
        //Log in
        loginPage.loginSuccessfully()
        headerPage.get.logoutButton().should('be.visible')
        headerPage.get.welcomeText().should('be.visible')
        //Navigate to the Online shop: Product list page
        welcomePage.selectOnlineShopButton()
        cy.url().should('include', 'onlineshop')
        productListPage.get.productListPageTitle().should('be.visible')
        //Add "Buzo Negro" two times to the shopping cart
        productListPage.addToCardBuzoNegroProduct()
        productListPage.get.messagealertModalHeader().should('be.visible').and('have.text', data.messageAlertProductAdded)
        productListPage.addToCardBuzoNegroProduct()
        productListPage.get.messagealertModalHeader().should('be.visible').and('have.text', data.messageAlertProductAdded)
        //Add one "Jean Azul" to the shopping cart
        productListPage.addToCardJeanAzul()
        productListPage.get.messagealertModalHeader().should('be.visible').and('have.text', data.messageAlertProductAdded)
        productListPage.goToShoppingCart()
        shoppingCartPage.get.shoppingCartPageTitle().should('be.visible').and('have.text', data.shoppingCartPageTitle)
    })

    it('TC01: Pre-entrega', () => {
        

        expect(1).equal(1);
    })
})