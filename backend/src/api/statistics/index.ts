import { time } from 'console';
import Router from 'express';
import { verifyAdmin, verifyToken } from 'middlewares';
import { getStatisticsDacilityById, getStatisticsProduce, getStatisticsDistribute, getStatisticsguarantee} from './controller';
import { getStatisticsDacilityProductLineById, getStatisticsProduceProductLineById, getStatisticsDistributeProductLineById, getStatisticsguaranteeProductLineById} from './controller01';
const router = Router();

router.get('/produce/:id', getStatisticsDacilityById);
router.get('/distribute/:id', getStatisticsDacilityById);
router.get('/guarantee/:id', getStatisticsDacilityById);
router.get('/produce', getStatisticsProduce);
router.get('/distribute', getStatisticsDistribute);
router.get('/guarantee', getStatisticsguarantee);

router.get('/produce/productline/:slug', getStatisticsProduceProductLineById);
router.get('/distribute/productline/:slug', getStatisticsDistributeProductLineById);
router.get('/guarantee/productline/:slug', getStatisticsguaranteeProductLineById);



router.get('/produce/:id/productline/:slug', getStatisticsDacilityProductLineById);
router.get('/distribute/:id/productline/:slug', getStatisticsDacilityProductLineById);


export default router;
