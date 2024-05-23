class ShoppingCartPage{
    get = {
        shoppingCartPageTitle: () => cy.get('[id="title"]'),

        cartRows: () => cy.get('ul[role="list"] li'),

        // shoppingCartDetailsBuzoNegro: () => ('li[class^="css-"] [data-cy="productAmount"]').eq(0),
        // shoppingCartDetailsJeanAzul: () => ('li[class^="css-"] [data-cy="productAmount"]').eq(1),
    }
}
export const shoppingCartPage = new ShoppingCartPage();