import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';
//Types
import { Credentials, LoadingIndicator } from '../../store/auth/types';
//import { ResponseError } from '../../types/response';
import { State } from '../../store/configureStore';
//Saga actions
import { signInRequest } from './../../store/auth/actions';
//Styles
import { Container } from './styles';

const SignInSchema = yup.object().shape({
	email: yup
		.string()
		.required('E-mail é um campo obrigatório')
		.email('Por favor, informe um e-mail válido'),
	password: yup.string().required('Senha é um campo obrigatório'),
});

const SignIn = () => {
	const { register, handleSubmit, errors } = useForm<Credentials>({
		resolver: yupResolver(SignInSchema),
		mode: 'onBlur',
	});

	const { isLoading, activityText } = useSelector<State, LoadingIndicator>(
		state => state.auth.loadingIndicator
	);
	//const { code, message } = useSelector<State, ResponseError>(state => state.auth.error);
	const isAuthenticated = useSelector<State, boolean>(state => state.auth.isAuthenticated);

	const dispatch = useDispatch();

	const submitForm = async ({ email, password }: Credentials) => {
		dispatch(signInRequest({ email: 'user@demo.com.br', password: 'Demo@2020' }));
	};

	if (isAuthenticated) {
		return <Redirect to='/overview' />;
	}
	return (
		<Container>
			<h1>signin</h1>
			<p>{`isLoading === ${isLoading} e activitytext=>${activityText}`}</p>
			<form onSubmit={handleSubmit(submitForm)}>
				<ErrorMessage name='email' errors={errors} render={({ message }) => <p>{message}</p>} />
				<input id='email' name='email' type='text' placeholder='email' ref={register} />
				<ErrorMessage name='password' errors={errors} render={({ message }) => <p>{message}</p>} />
				<input
					id='password'
					name='password'
					type='password'
					placeholder='password'
					ref={register}
				/>
				<button type='submit'>Submit</button>
			</form>
		</Container>
	);
};

export default SignIn;
