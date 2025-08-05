
class FunnelsActions{

    addEvent(){
        cy.get('.add-text').click()  
    }
    selectEvent(action:string){
        cy.contains(action).click()
    }
    saveFunnel(name:string){
        cy.get('.save-btn').click()
        cy.get('#segment-title-input').clear().type(name)
        //cy.get('#save-segment-btn').click()
    }
    goToLibraryForFunnels(){
        cy.get('#pages-bar > :nth-child(1)').click()
    }
    // addBreakDown(value:string){
    //     cy.get('.select-breakdown').click()
    //     cy.get('.select-breakdown-value > .mat-menu-trigger')
    // }
    addBreakDown(value: string) {
        cy.get('.select-breakdown').click(); 
        cy.get('.select-breakdown-value > .mat-menu-trigger').click(); 
        cy.get('.mat-menu-content .mat-menu-item').contains(value).click(); 
    }
    selectSegment(value: string){
        cy.get('.select-segment').click()
        cy.get('.select-segment-value > .mat-menu-trigger').click()
        cy.get('.search-input').type(value)
        cy.get('#mat-menu-panel-0').contains(value).click(); 
    }
    addCompare(firstValue: string, secondValue: string) {
        cy.get('.items > .mat-menu-trigger').click();
        cy.get('#mat-menu-panel-2').contains(firstValue).click();
        if(firstValue === "Time Period"){
            cy.get('#mat-menu-panel-3').contains(secondValue).click();
        }else{
            cy.get('#mat-menu-panel-4').contains(secondValue).click();

        }
    }
    deleteCompare(value: string) {
        cy.contains('.selected-item', value) // Find the .selected-item containing the exact value
            .find('.cancel') // Find the cancel button within the matched .selected-item
            .click(); // Click on the cancel button
    }
    event(event:string,select:string,value:string){
        cy.get('.ant-select-selector').eq(3).click().get('.cat-container').contains(event).click()
        cy.get('.ant-select-selection-item').eq(4).click().get('.cdk-virtual-scroll-viewport').contains(select).click()
        cy.get('.fs-input-autocomplete-container > .ant-dropdown-trigger').type(value)
        cy.get('.action-button').click()
        cy.get('.fs-input-autocomplete-container > .ant-dropdown-trigger').eq(1).type(value)
        cy.get('.action-button').eq(3).click()
        cy.get('.fs-input-autocomplete-container > .ant-dropdown-trigger').eq(2).type(value)
        cy.wait(3000)
    }
    eventToOne(step:number,event:string,select:string,type:string,value:string){
        cy.get('.funnel-filters').eq(step).find('.ant-select-selector').eq(0).click().get('.cat-container').contains(event).click()
        cy.get('.funnel-filters').eq(step).find('.ant-select-selector').eq(1).click().get('.cdk-virtual-scroll-viewport').contains(select).click()
        cy.get('.funnel-filters').eq(step).find('.ant-select-selector').eq(2).click().get(".ant-select-dropdown ").contains(type).click()
        cy.get('.funnel-filters').eq(step).find('.fs-input-autocomplete-container > .ant-dropdown-trigger').type(value)
    }
    
    
}
export default FunnelsActions;