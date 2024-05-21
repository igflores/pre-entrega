class ShoppingCartPage{
    get = {
        shoppingCartPageTitle: () => cy.get('[id="title"]'),
    }
}
export const shoppingCartPage = new ShoppingCartPage();