class OnlineShopProductsPage{
    get = {
        productTitlePage: () => cy.get('#title'),
        buzoNegroProduct: () => cy.get('[class="css-4t9hm0"]').eq(0),
        buzoNegroName: () => cy.get('[data-cy="name"]').eq(0),
        buzoNegroPrice: () => cy.get('[data-cy="price"]').eq(0),


        zapatillasAzulesProduct: () => cy.get('[class="css-4t9hm0"]').eq(1),
        messagealertModalHeader: () => cy.get('[id^="chakra-modal"] header'),
        
    }

    
    addToCardBuzoNegroProduct(){
        this.get.buzoNegroProduct().within(() => {
                cy.get('[data-cy="name"]').invoke('text').then(productTitle => {
                    cy.wrap(productTitle).as('productTitle');
                });                
                cy.get('[data-cy="price"][id="price"]').invoke('text').then(productPrice => {
                    cy.wrap(productPrice).as('productPrice');
                });
                cy.log('@productTitle', '@productPrice');
                cy.get('[class="css-1p856vl"] button[data-cy^="add-to-cart-1000"]').click();               
        });
    }

}
export const onlineShopProductsPage = new OnlineShopProductsPage();