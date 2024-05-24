class ShoppingCartPage{
    get = {
        shoppingCartPageTitle: () => cy.get('[id="title"]'),
        cartRows: () => cy.get('ul[role="list"] li'),
        showTotalPriceButton: () => cy.get('[id="root"] button[class="chakra-button css-1i1ynt3"]'),
        totalPrice: () => cy.get('p[id="price"]'),
    }

    selectTotalPriceButton() {
        this.get.showTotalPriceButton().click()
    }
}
export const shoppingCartPage = new ShoppingCartPage();