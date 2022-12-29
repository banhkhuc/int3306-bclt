import { Request, Response } from 'express';
import * as service01 from './service01';
import { ApiResponse } from 'utils/rest/ApiResponse';
import ResponeCodes from 'utils/constants/ResponeCode';

const getStatisticsDacilityProductLineById = async (req: Request, res: Response) => {
	try {
		const result = await service01.getStatisticsDacilityProductLineById(req);
		const { data, message, status } = result;
		return new ApiResponse(data, message, status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't get ProductLine.", ResponeCodes.ERROR).send(res);
	}
};

const getStatisticsProduceProductLineById = async (req: Request, res: Response) => {
	try {
		const result = await service01.getStatisticsProduceProductLineById(req);
		const { data, message, status } = result;
		return new ApiResponse(data, message, status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't get ProductLine.", ResponeCodes.ERROR).send(res);
	}
};

const getStatisticsDistributeProductLineById = async (req: Request, res: Response) => {
	try {
		const result = await service01.getStatisticsDistributeProductLineById(req);
		const { data, message, status } = result;
		return new ApiResponse(data, message, status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't get ProductLine.", ResponeCodes.ERROR).send(res);
	}
};

const getStatisticsguaranteeProductLineById = async (req: Request, res: Response) => {
	try {
		const result = await service01.getStatisticsguaranteeProductLineById(req);
		const { data, message, status } = result;
		return new ApiResponse(data, message, status).send(res);
	} catch (error) {
		return new ApiResponse(error.message, "Couldn't get ProductLine.", ResponeCodes.ERROR).send(res);
	}
};
export { getStatisticsDacilityProductLineById, getStatisticsProduceProductLineById, getStatisticsDistributeProductLineById, getStatisticsguaranteeProductLineById};
