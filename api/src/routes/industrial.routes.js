import {Router} from "express";
import { methods as industrialController } from "../controllers/industrial.controller.js"

const router=Router();

router
.get("/clubes", industrialController.consultarDatosClubes)
.get("/control_escolar", industrialController.consultarDatosControlEscolar)
.get("/tutorias", industrialController.consultarDatosTutorias)
.get("/biblioteca", industrialController.consultarDatosBiblioteca)
.get("/centro_de_computo", industrialController.consultarDatosCentroDeComputo)
.get("/servicio_social", industrialController.consultarDatosServicioSocial)
.get("/residencias", industrialController.consultarDatosResidencias)
.get("/idiomas", industrialController.consultarDatosIdiomas)
.get("/cafeteria_1", industrialController.consultarDatosCafeteria1)
.get("/cafeteria_2", industrialController.consultarDatosCafeteria2)
.get("/cajas", industrialController.consultarDatosCajas)
.get("/coordinador_de_carreras", industrialController.consultarDatosCoordinadorDeCarreras)
.get("/becas", industrialController.consultarDatosBecas)
.get("/centro_de_copiado", industrialController.consultarDatosCentroDeCopiado)
.get("/psicologico", industrialController.consultarDatosPsicologico)
.get("/medico", industrialController.consultarDatosMedico)
.get("/asesorias_academicas", industrialController.consultarDatosAsesoriasAcademicas)


export default router