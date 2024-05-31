import { loginPage } from "../support/pages/loginPage"
import { registerPage } from "../support/pages/registerPage"
import { headerPage } from "../support/pages/headerPage"
import { welcomePage } from "../support/pages/welcomePage"
import { productListPage } from "../support/pages/productListPage"
import { shoppingCartPage } from "../support/pages/shoppingCartPage"
// import data from "../fixtures/data/pre-entrega.json"
describe('Actividad complementaria 5', () => { 
    
    let data;
    before('Before', () => {
        cy.fixture('data/pre-entrega').then(fixtureData => {
            data = fixtureData
        })
    });

    beforeEach("Preconditions", () => {
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
    })

    it('TC01: Pre-entrega', () => {
        const totalPriceBuzoNegro = (data.buzoNegro.price * data.buzoNegro.quantity);
        const totalPriceJeanAzul = (data.jeanAzul.price * data.jeanAzul.quantity);
        const totalOrderPrice = (parseFloat(totalPriceBuzoNegro) + parseFloat(totalPriceJeanAzul)).toFixed(2);

        // Search for the product = Buzo negro
        productListPage.get.searchBarInput().click().clear().type(`${data.buzoNegro.name}{enter}`);

        //Add "Buzo Negro" two times to the shopping cart
        productListPage.addToCartProduct(data.buzoNegro.name)
        productListPage.get.messagealertModalHeader().should('be.visible').and('have.text', data.messageAlertProductAdded)
        productListPage.addToCartProduct(data.buzoNegro.name)
        productListPage.get.messagealertModalHeader().should('be.visible').and('have.text', data.messageAlertProductAdded)
        
        // Search for the product = Jean azul
        productListPage.get.searchBarInput().click().clear().type(`${data.jeanAzul.name}{enter}`);
        
        //Add one "Jean Azul" to the shopping cart
        productListPage.addToCartProduct(data.jeanAzul.name)
        productListPage.get.messagealertModalHeader().should('be.visible').and('have.text', data.messageAlertProductAdded)


        //Navigate to the Shopping cart page
        productListPage.goToShoppingCart()
        shoppingCartPage.get.shoppingCartPageTitle().should('be.visible').and('have.text', data.shoppingCartPageTitle)

        shoppingCartPage.get.cartRows().contains(data.buzoNegro.name).parents('li').within(() => {
            cy.get('[data-cy="productAmount"]').should('have.text', data.buzoNegro.quantity.toString());
            cy.get('[data-cy="productName"]').should('have.text', data.buzoNegro.name);
            cy.get('[data-cy="unitPrice"]').should('have.text', `$${ data.buzoNegro.price.toString() }`);
            cy.get('[data-cy="totalPrice"]').should('have.text', `$${ totalPriceBuzoNegro }`);
        });
        shoppingCartPage.get.cartRows().contains(data.jeanAzul.name).parents('li').within(() => {
            cy.get('[data-cy="productAmount"]').should('have.text', data.jeanAzul.quantity.toString());
            cy.get('[data-cy="productName"]').should('have.text', data.jeanAzul.name);
            cy.get('[data-cy="unitPrice"]').should('have.text', `$${ data.jeanAzul.price.toString() }`);
            cy.get('[data-cy="totalPrice"]').should('have.text', `$${ totalPriceJeanAzul }`);
        });
        shoppingCartPage.selectTotalPriceButton();
        shoppingCartPage.get.totalPrice().should('be.visible');        
        shoppingCartPage.get.totalPrice().should('have.text', totalOrderPrice);
    })
})