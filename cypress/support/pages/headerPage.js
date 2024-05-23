class HeaderPage{
    get = {
        welcomeText: () => cy.get('[id*="user_pushingit"]', { timeout:90000 }),
        logoutButton: () => cy.get('[data-cy="logout"]')
    }
}
export const headerPage = new HeaderPage();