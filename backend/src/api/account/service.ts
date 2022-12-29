import bcrypt from 'bcrypt';
import LoginPayLoad from './LoginPayload';
import { User, UserCode } from 'databases/models';
import ResponeCodes from 'utils/constants/ResponeCode';
import { generateAccount, generateCode, generatePassword, generateToken } from 'utils/helpers/generate';
import CreatePayload from './CreatePayload';
import { sendForgotEmail, sendRegisterEmail, sendResetEmail } from 'utils/helpers/email';
import ForgotPayLoad from './ForgotPayload';
import sequelize from 'databases';

const verifyAccount = async (account: string) => {
	const user = await User.findOne({
		where: {
			account
		}
	});
	return user;
};

const verifyEmail = async (email: string) => {
	const user = await User.findOne({
		where: {
			email
		}
	});
	return user;
};

const createAccount = async (createData: CreatePayload) => {
	const transaction = await sequelize.transaction();
	try {
		const { email, facility } = createData;
		if (!email || !facility) {
			return {
				message: 'Invalid payload.',
				status: ResponeCodes.BAD_REQUEST
			};
		} else {
			const verify = await verifyEmail(email);
			if (!verify) {
				const password = generatePassword();
				const hashPassword = bcrypt.hashSync(password, 10);
				const account = await generateAccount();

				const user = await User.create(
					{
						...createData,
						password: hashPassword,
						account
					},
					{ transaction }
				);
				await user.setFacility(facility, { transaction });
				await transaction.commit();
				sendRegisterEmail(email, account, password);
				const token = generateToken(user.id);

				return {
					data: {
						user,
						token
					},
					message: 'Create successfully!',
					status: ResponeCodes.OK
				};
			} else {
				return {
					message: 'Email exsist.',
					status: ResponeCodes.BAD_REQUEST
				};
			}
		}
	} catch (error) {
		await transaction.rollback();
		throw error;
	}
};

const login = async (loginData: LoginPayLoad) => {
	try {
		const { account, password } = loginData;

		if (!account || !password) {
			return {
				message: 'Invalid account or password.',
				status: ResponeCodes.BAD_REQUEST
			};
		} else {
			const user = await verifyAccount(account);

			if (user) {
				const verifyPassword = bcrypt.compareSync(password, user.password);
				if (!verifyPassword) {
					return {
						message: 'Wrong password!',
						status: ResponeCodes.OK
					};
				} else {
					const token = generateToken(user.id);
					return {
						data: {
							user,
							token
						},
						message: 'Login successfully!',
						status: ResponeCodes.OK
					};
				}
			} else {
				return {
					message: 'Account not exsist.',
					status: ResponeCodes.NOT_FOUND
				};
			}
		}
	} catch (error) {
		throw error;
	}
};

const sendCode = async (account: string) => {
	try {
		if (!account) {
			return {
				message: 'Invalid account.',
				status: ResponeCodes.BAD_REQUEST
			};
		} else {
			const user = await verifyAccount(account);
			if (user) {
				const { code, expires } = generateCode();
				await UserCode.create({
					account,
					code,
					expires
				});
				sendForgotEmail(user.email, code);

				return {
					message: 'Send code successfully!',
					status: ResponeCodes.CREATED
				};
			} else {
				return {
					message: 'Account not exsist.',
					status: ResponeCodes.OK
				};
			}
		}
	} catch (error) {
		throw error;
	}
};

const verifyCode = async (forgotData: ForgotPayLoad) => {
	try {
		const { account, code } = forgotData;

		if (!account || !code) {
			return {
				data: false,
				message: 'Invalid email or code',
				status: ResponeCodes.BAD_REQUEST
			};
		} else {
			const forgottenUser = await UserCode.findOne({
				where: {
					account,
					code
				}
			});
			if (forgottenUser) {
				if (forgottenUser.expires < new Date(Date.now())) {
					return {
						data: false,
						message: 'Expired code!',
						status: ResponeCodes.OK
					};
				} else {
					return {
						data: true,
						message: 'Verify code successfully!',
						status: ResponeCodes.OK
					};
				}
			} else {
				return {
					data: false,
					message: 'Incorrect code!',
					status: ResponeCodes.OK
				};
			}
		}
	} catch (error) {
		throw error;
	}
};

const resetPassword = async (account: string) => {
	try {
		if (!account) {
			return {
				message: 'Invalid account or password',
				status: ResponeCodes.BAD_REQUEST
			};
		} else {
			const password = generatePassword();
			const hashPassword = bcrypt.hashSync(password, 10);

			const user = await User.findOne({
				where: {
					account
				}
			});

			await user.update({
				password: hashPassword
			});

			sendResetEmail(user.email, password);

			return {
				message: 'Reset password successfully!',
				status: ResponeCodes.OK
			};
		}
	} catch (error) {
		throw error;
	}
};

export { createAccount, login, sendCode, verifyCode, resetPassword };
