import { Request, Response } from 'express';
import * as service from './service';
import { ApiResponse } from 'utils/rest/ApiResponse';
import ResponeCodes from 'utils/constants/ResponeCode';

const getStatisticsDacilityById = async (req: Request, res: Response) => {
	try {
		const result = await service.getStatisticsDacilityById(req);
		const { data, message, status } = result;
		return new ApiResponse(data, message, status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't get ProductLine.", ResponeCodes.ERROR).send(res);
	}
};

const getStatisticsProduce = async (req: Request, res: Response) => {
	try {
		const result = await service.getStatisticsProduce(req);
		const { data, message, status } = result;
		return new ApiResponse(data, message, status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't get ProductLine.", ResponeCodes.ERROR).send(res);
	}
};

const getStatisticsDistribute = async (req: Request, res: Response) => {
	try {
		const result = await service.getStatisticsDistribute(req);
		const { data, message, status } = result;
		return new ApiResponse(data, message, status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't get ProductLine.", ResponeCodes.ERROR).send(res);
	}
};

const getStatisticsguarantee = async (req: Request, res: Response) => {
	try {
		const result = await service.getStatisticsguarantee(req);
		const { data, message, status } = result;
		return new ApiResponse(data, message, status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't get ProductLine.", ResponeCodes.ERROR).send(res);
	}
};
export { getStatisticsDacilityById, getStatisticsProduce, getStatisticsDistribute, getStatisticsguarantee};
