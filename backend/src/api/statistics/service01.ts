import { Request } from 'express';
import { Statistics, Facility } from 'databases/models';
import ResponeCodes from 'utils/constants/ResponeCode';
import FacilityType from 'utils/constants/FacilityType';
import paginate from 'utils/helpers/pagination';
import { Op } from 'sequelize';

const getStatisticsDacilityProductLineById = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;


		const id = parseInt(req.params.id);
		const product_line_model  =  req.params.slug;
		if (isNaN(id) || product_line_model == null) {
			data = null;
			message = 'Invalid identifier.';
			status = ResponeCodes.BAD_REQUEST;
		} else {
			let statistic = await Statistics.findAll({
				where:{
					facilityId: id,
					productLineModel: product_line_model
				},
				order: [['createdAt', 'DESC']],
			});
			if (!statistic) {
				data = null;
				message = 'Not found.';
				status = ResponeCodes.NOT_FOUND;
			} else {
				let time = [];
				let warehouse = [];
				let work = [];
				var d = new Date();
				let Year = d.getFullYear();
				for(let i =1;i<=12;i++){
					let s = Year +"/"
					if(i<10) s = s+"0"+i;
					else s=s+i;
					time.push(s);
				}
				for(let i in time){
					warehouse.push(0);
					work.push(0);
					for(let j in statistic){
						if(statistic[j].time == time[i]){
							warehouse[i]+= statistic[j].warehouse;
							work[i]+= statistic[j].work;
						}
					}
				}
				data = {time, warehouse, work};
				message = 'Get successfully!';
				status = ResponeCodes.OK;
			}
		}

		return {
			data,
			message,
			status
		};
	} catch (error) {
		throw error;
	}
};

const getStatisticsProduceProductLineById = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;

		const product_line_model  =  req.params.slug; 
		let tk = await Statistics.findAll({
			where:{
				productLineModel: product_line_model
			},
			order: [['createdAt', 'DESC']],
		});
		let statistic = [];
		for(let i in tk){
			const facility = await Facility.findByPk(tk[i].facilityId);
			if(facility.type == FacilityType.PRODUCE) statistic.push(tk[i])
		}
		if (!statistic) {
			data = null;
			message = 'Not found.';
			status = ResponeCodes.NOT_FOUND;
		} else {
			let time = [];
			let warehouse = [];
			let work = [];
			var d = new Date();
			let Year = d.getFullYear();
			for(let i =1;i<=12;i++){
				let s = Year +"/"
				if(i<10) s = s+"0"+i;
				else s=s+i;
				time.push(s);
			}
			for(let i in time){
				warehouse.push(0);
				work.push(0);
				for(let j in statistic){
					if(statistic[j].time == time[i]){
						warehouse[i]+= statistic[j].warehouse;
						work[i]+= statistic[j].work;
					}
				}
			}
			data = {time, warehouse, work};
			message = 'Get successfully!';
			status = ResponeCodes.OK;
		}
		return {
			data,
			message,
			status
		};
	} catch (error) {
		throw error;
	}
};

const getStatisticsDistributeProductLineById = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;
		
		const product_line_model  =  req.params.slug; 
		let tk = await Statistics.findAll({
			where:{
				productLineModel: product_line_model
			},
			order: [['createdAt', 'DESC']],
		});
		let statistic = [];
		for(let i in tk){
			const facility = await Facility.findByPk(tk[i].facilityId);
			if(facility.type == FacilityType.DISTRIBUTE) statistic.push(tk[i])
		}
		if (!statistic) {
			data = null;
			message = 'Not found.';
			status = ResponeCodes.NOT_FOUND;
		} else {
			let time = [];
			let warehouse = [];
			let work = [];
			var d = new Date();
			let Year = d.getFullYear();
			for(let i =1;i<=12;i++){
				let s = Year +"/"
				if(i<10) s = s+"0"+i;
				else s=s+i;
				time.push(s);
			}
			for(let i in time){
				warehouse.push(0);
				work.push(0);
				for(let j in statistic){
					if(statistic[j].time == time[i]){
						warehouse[i]+= statistic[j].warehouse;
						work[i]+= statistic[j].work;
					}
				}
			}
			data = {time, warehouse, work};
			message = 'Get successfully!';
			status = ResponeCodes.OK;
		}
		return {
			data,
			message,
			status
		};
	} catch (error) {
		throw error;
	}
};

const getStatisticsguaranteeProductLineById = async (req: Request) => {
	try {
		let data;
		let message: string;
		let status: number;
		
		const product_line_model  =  req.params.slug; 
		let tk = await Statistics.findAll({
			where:{
				productLineModel: product_line_model
			},
			order: [['createdAt', 'DESC']],
		});
		let statistic = [];
		for(let i in tk){
			const facility = await Facility.findByPk(tk[i].facilityId);
			if(facility.type == FacilityType.GUARANTEE) statistic.push(tk[i])
		}
		if (!statistic) {
			data = null;
			message = 'Not found.';
			status = ResponeCodes.NOT_FOUND;
		} else {
			let time = [];
			let warehouse = [];
			let work = [];
			var d = new Date();
			let Year = d.getFullYear();
			for(let i =1;i<=12;i++){
				let s = Year +"/"
				if(i<10) s = s+"0"+i;
				else s=s+i;
				time.push(s);
			}
			for(let i in time){
				warehouse.push(0);
				work.push(0);
				for(let j in statistic){
					if(statistic[j].time == time[i]){
						warehouse[i]+= statistic[j].warehouse;
						work[i]+= statistic[j].work;
					}
				}
			}
			data = {time, warehouse, work};
			message = 'Get successfully!';
			status = ResponeCodes.OK;
		}
		return {
			data,
			message,
			status
		};
	} catch (error) {
		throw error;
	}
};

export { getStatisticsDacilityProductLineById, getStatisticsProduceProductLineById, getStatisticsDistributeProductLineById, getStatisticsguaranteeProductLineById};
