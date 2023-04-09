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
.get("/residencias", adminController.consultarDatosResidencias)
.get("/idiomas", adminController.consultarDatosIdiomas)
.get("/cafeteria_1", adminController.consultarDatosCafeteria1)
.get("/cafeteria_2", adminController.consultarDatosCafeteria2)
.get("/cajas", adminController.consultarDatosCajas)
.get("/coordinador_de_carreras", adminController.consultarDatosCoordinadorDeCarreras)
.get("/becas", adminController.consultarDatosBecas)
.get("/centro_de_copiado", adminController.consultarDatosCentroDeCopiado)
.get("/psicologico", adminController.consultarDatosPsicologico)
.get("/medico", adminController.consultarDatosMedico)
.get("/asesorias_academicas", adminController.consultarDatosAsesoriasAcademicas)


export default router