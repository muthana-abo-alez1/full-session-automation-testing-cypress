
import DashboradActions from "../dashborad/actions";
import FunnelsActions from "../funnels/actions"; 

class SideBarActions {
    selectDashboard(): DashboradActions {
        cy.get('.mat-drawer-inner-container > :nth-child(2)').click();
        return new DashboradActions();
    }

    selectFunnels(): FunnelsActions {
        cy.get(":nth-child(5) > .page-label").click()
        return new FunnelsActions();
    }

}

export default SideBarActions;
