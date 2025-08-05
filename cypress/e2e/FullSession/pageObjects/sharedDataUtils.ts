import { IDataLogin, IError, ILogin } from "../../../support/types";

export const createLoginBody = (login: ILogin) => {
    return { ...login };
};

class SharedDataUtils {
    login(login: ILogin): Cypress.Chainable<IDataLogin> {
        return cy.request({
            method: "POST",
            url: "https://test-new.fullsession.io/v1/auth/login",
            body: createLoginBody(login),
            headers: {},
            failOnStatusCode: false
        }).then((response) => response.body)
    }
}

export default SharedDataUtils;
