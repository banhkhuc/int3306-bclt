import { Request, Response } from 'express';
import ResponeCodes from 'utils/constants/ResponeCode';
import { ApiResponse } from 'utils/rest/ApiResponse';
import * as service from './service';

// POST: /create
const createAccount = async (req: Request, res: Response) => {
	try {
		const result = await service.createAccount(req.body);
		return new ApiResponse(result.data, result.message, result.status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't create account.", ResponeCodes.ERROR).send(res);
	}
};

// POST: /login
const login = async (req: Request, res: Response) => {
	try {
		const result = await service.login(req.body);
		return new ApiResponse(result.data, result.message, result.status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't login.", ResponeCodes.ERROR).send(res);
	}
};

// POST: /forgot
const forgot = async (req: Request, res: Response) => {
	try {
		const result = await service.sendCode(req.body.account);
		const { message, status } = result;
		return new ApiResponse('', message, status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't send code.", ResponeCodes.ERROR).send(res);
	}
};

// POST: /reset
const resetPassword = async (req: Request, res: Response) => {
	try {
		const verifyResult = await service.verifyCode(req.body);
		if (verifyResult.data) {
			const result = await service.resetPassword(req.body.account);
			const { message, status } = result;
			return new ApiResponse('', message, status).send(res);
		} else {
			const { data, message, status } = verifyResult;
			return new ApiResponse(data, message, status).send(res);
		}
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't reset password.", ResponeCodes.ERROR).send(res);
	}
};

export { createAccount, login, forgot, resetPassword };
