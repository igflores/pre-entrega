class ProductListPage{
    get = {
        productListPageTitle: () => cy.get('#title'),
        buzoNegroProduct: () => cy.get('[class="css-4t9hm0"]').eq(0),
        jeanAzulAddtoCardButton: () => cy.get('button[id="add-to-cart-1003"]'),
        messagealertModalHeader: () => cy.get('[id^="chakra-modal"] header'),
        closeModalButton: () => cy.get('[id^="chakra-modal"] button[data-cy="closeModal"]'),
        goToShoppingCartButton: () => cy.get('[data-cy="goShoppingCart"]'),
    }
    
    addToCardBuzoNegroProduct() {
        cy.get('[class="css-1p856vl"] button[data-cy^="add-to-cart-1000"]').click()
        this.get.closeModalButton().click()
    }

    addToCardJeanAzul() {
        this.get.jeanAzulAddtoCardButton().click()
        this.get.closeModalButton().click()
    }

    goToShoppingCart() {
        this.get.goToShoppingCartButton().click()
    }

}
export const productListPage = new ProductListPage();