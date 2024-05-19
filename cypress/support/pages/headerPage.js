class HeaderPage{
    get = {
        welcomeText: () => cy.get('[id*="user_pushingit"]'),
        logoutButton: () => cy.get('[data-cy="logout"]')
    }
}
export const headerPage = new HeaderPage();