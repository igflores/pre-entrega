class WelcomePage{
    get = {
        onlineShopButton: () => cy.get('[data-cy="onlineshoplink"]')
    }

    selectOnlineShopButton(){
        this.get.onlineShopButton().click()
    }
}
export const welcomePage = new WelcomePage();