enum Action {
    CLICKED_ON,
    ERROR_CLICKS_ON,
    RAGE_CLICKS_ON,
    DEAD_CLICKS_ON,
    THRASHED_CURSOR
}

function getActionString(action: Action): string {
    switch (action) {
        case Action.CLICKED_ON:
            return "Clicked on ...";
        case Action.ERROR_CLICKS_ON:
            return "Error clicks on ...";
        case Action.RAGE_CLICKS_ON:
            return "Rage clicks on ...";
        case Action.DEAD_CLICKS_ON:
            return "Dead clicks on ...";
        case Action.THRASHED_CURSOR:
            return "Thrashed cursor";
        default:
            return "Unknown action";
    }
}
function getActionFromString(actionString: string): Action | undefined {
    switch (actionString.toLowerCase()) {
        case "clicked on ...":
            return Action.CLICKED_ON;
        case "error clicks on ...":
            return Action.ERROR_CLICKS_ON;
        case "rage clicks on ...":
            return Action.RAGE_CLICKS_ON;
        case "dead clicks on ...":
            return Action.DEAD_CLICKS_ON;
        case "thrashed cursor":
            return Action.THRASHED_CURSOR;
        default:
            return undefined; 
    }
}