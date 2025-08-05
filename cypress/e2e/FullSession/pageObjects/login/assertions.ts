import { IDataLogin, IError } from "@support/types";

class LoginAssertions {
    confirmResponse(response: Cypress.Chainable<IDataLogin>, status?: number, message?: string,error?:string): void {
        response.then((res) => {
            expect(res.status).to.equal(status);
            expect(res.message).to.equal(message);
            expect(res.error).to.equal(error);
        });
    }
    confirmResponseStatus(response: Cypress.Chainable<IDataLogin>, status: number): void {
        response.then((res) => {
                expect(res.status).to.equal(status);
        });
    }
    confirmResponseMessage(response: Cypress.Chainable<IDataLogin>, message: string): void {
        response.then((res) => {
                expect(res.message).to.equal(message);
        });
    }
    confirmResponseError(response: Cypress.Chainable<IDataLogin>, error: string): void {
        response.then((res) => {
                expect(res.error).to.equal(error);
        });
    }
}

export default LoginAssertions

