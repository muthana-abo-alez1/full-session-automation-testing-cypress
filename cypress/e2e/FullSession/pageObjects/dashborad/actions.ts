class DashboradActions{
    goToFunnelsAndConversionsPage(){
        cy.get(":nth-child(5) > .page-label").click()
    }
}
export default DashboradActions;