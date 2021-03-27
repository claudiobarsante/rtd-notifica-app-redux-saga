//AuthState
export type AuthError = {
	code: number;
	message: string;
};

export type LoadingIndicatorState = {
	isLoading: boolean;
	activityText: string;
};

export type AuthState = {
	oficioId: number;
	institucionalId: number;
	userId: string;
	userName: string;
	token: string;
	apelido: string;
	error: AuthError;
	loadingIndicator: LoadingIndicatorState;
	expirationDate: string;
};

//Credentials
export type Credentials = {
	email: string;
	password: string;
};

//Redux-Saga ActionTypes
export enum ActionTypes {
	signInRequest = 'SIGNIN_REQUEST',
	signInSuccess = 'SIGNIN_SUCCESS',
	signInFailure = 'SIGNIN_FAILURE',
}
