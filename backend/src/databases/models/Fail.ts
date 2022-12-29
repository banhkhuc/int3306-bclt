import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import sequelize from 'databases';
import Product from './Product';
import Facility from './Facility';

export interface FailModel extends Model<InferAttributes<FailModel>, InferCreationAttributes<FailModel>> {
	id: CreationOptional<number>;
	createdAt: CreationOptional<Date>;
	updatedAt: CreationOptional<Date>;
}

const Fail = sequelize.define<FailModel>(
	'Fail',
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		createdAt: {
			type: DataTypes.DATE
		},
		updatedAt: {
			type: DataTypes.DATE
		}
	},
	{
		tableName: 'fail',
		underscored: true
	}
);

Product.hasOne(Fail);
Fail.belongsTo(Product);

Facility.hasMany(Fail, {
	foreignKey: 'produceId'
});

Facility.hasMany(Fail, {
	foreignKey: 'guaranteeId'
});

export default Fail;
