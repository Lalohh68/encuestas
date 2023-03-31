import {Router} from "express";
import { methods as adminController } from "../controllers/adminControllers"

const router=Router();

router
.get("/clubes", adminController.consultarDatosClubes)
.get("/control_escolar", adminController.consultarDatosControlEscolar)
.get("/tutorias", adminController.consultarDatosTutorias)
.get("/biblioteca", adminController.consultarDatosBiblioteca)
.get("/centro_de_computo", adminController.consultarDatosCentroDeComputo)
.get("/servicio_social", adminController.consultarDatosServicioSocial)


export default router