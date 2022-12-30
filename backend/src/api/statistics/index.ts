import { time } from 'console';
import Router from 'express';
import { verifyAdmin, verifyToken } from 'middlewares';
import { getStatisticsProduce, getStatisticsDistribute, getStatisticsguarantee, getStatisticsFacilityById} from './controller';
const router = Router();

router.get('/produce', getStatisticsProduce);
router.get('/distribute', getStatisticsDistribute);
router.get('/guarantee', getStatisticsguarantee);
router.get('/facility', getStatisticsFacilityById);


export default router;
