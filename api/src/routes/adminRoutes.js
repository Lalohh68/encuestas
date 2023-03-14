import {Router} from "express";
import { methods as adminController } from "../controllers/adminControllers"

const router=Router();

router
.get("/clubes", adminController.consultarDatosClubes)


export default router