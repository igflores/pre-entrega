class ProductListPage{
    get = {
        searchBarInput: () => cy.get('input[data-cy="search-bar"]'),
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