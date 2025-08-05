export interface IToken {
    access_token: string;
    refresh_token: string;
    id_token: string;
    scope: string;
    expires_in: number;
    token_type: string;
}

export interface IDataLogin {
    status?: number;
    message?: string;
    data?: {
        token: IToken;
    }
    error?:string
}
export interface ILogin{
    email:string,
    password: string
}
export interface IError{
    error:string
}

