class ProductListPage{
    get = {
        productListPageTitle: () => cy.get('#title'),
        searchBarInput: () => cy.get('input[data-cy="search-bar"]'),

        buzoNegroProduct: () => cy.get('[class="css-4t9hm0"]').eq(0),
        buzoNegroAddtoCartButton: () => cy.get('[class="css-1p856vl"] button[data-cy^="add-to-cart-1000"]'),
        jeanAzulAddtoCartButton: () => cy.get('button[id="add-to-cart-1003"]'),
        messagealertModalHeader: () => cy.get('[id^="chakra-modal"] header'),
        closeModalButton: () => cy.get('[id^="chakra-modal"] button[data-cy="closeModal"]'),
        goToShoppingCartButton: () => cy.get('[data-cy="goShoppingCart"]'),
    }
        
    addToCartProduct(product) {
        cy.get(`[name="${product}"]`).click();
        this.get.closeModalButton().click();
    }

    goToShoppingCart() {
        this.get.goToShoppingCartButton().click()
    }
}
export const productListPage = new ProductListPage();