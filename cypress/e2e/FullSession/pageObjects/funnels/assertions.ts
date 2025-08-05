class FunnelsAssertions{
    assertFunnelsFound(name:string){
        cy.get('.ng-tns-c101-133 > .fs-segments-cell').should("contain",name)
    }
    ConversionRate(conversionRate:string){
        cy.get(':nth-child(1) > .text > .from-number').should("have.text",conversionRate)
    }
    TimeToConvert(timeToConvert:string){
        cy.get(':nth-child(2) > .text > .from-number').should("have.text",timeToConvert)
    }
    UsersCompletedTheFunnel(usersCompletedTheFunnel:string){
        cy.get(':nth-child(3) > .text > .from-number').should("have.text",usersCompletedTheFunnel)
    }
    assertSegmentlsFound(value:string){
        cy.get('.chart-container').contains('tspan', value).should('exist');

    }
    assertBreakdownlsFound(value:string){
        cy.get('.select-breakdown-value > .mat-menu-trigger').should("have.text",value)

    }
    assertCompareIsFound(value: string) {
        cy.get('.selected-item').should('have.text', value);
    }
    assertCompareIsNotFound(value: string) {
        cy.get('.selected-item').should('not.have.text', value);
    }
    
}
export default FunnelsAssertions;