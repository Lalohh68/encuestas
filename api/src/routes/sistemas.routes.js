import {Router} from "express";
import { methods as sistemasController } from "../controllers/sistemas.controller.js"

const router=Router();

router
.get("/clubes", sistemasController.consultarDatosClubes)
.get("/control_escolar", sistemasController.consultarDatosControlEscolar)
.get("/tutorias", sistemasController.consultarDatosTutorias)
.get("/biblioteca", sistemasController.consultarDatosBiblioteca)
.get("/centro_de_computo", sistemasController.consultarDatosCentroDeComputo)
.get("/servicio_social", sistemasController.consultarDatosServicioSocial)
.get("/residencias", sistemasController.consultarDatosResidencias)
.get("/idiomas", sistemasController.consultarDatosIdiomas)
.get("/cafeteria_1", sistemasController.consultarDatosCafeteria1)
.get("/cafeteria_2", sistemasController.consultarDatosCafeteria2)
.get("/cajas", sistemasController.consultarDatosCajas)
.get("/coordinador_de_carreras", sistemasController.consultarDatosCoordinadorDeCarreras)
.get("/becas", sistemasController.consultarDatosBecas)
.get("/centro_de_copiado", sistemasController.consultarDatosCentroDeCopiado)
.get("/psicologico", sistemasController.consultarDatosPsicologico)
.get("/medico", sistemasController.consultarDatosMedico)
.get("/asesorias_academicas", sistemasController.consultarDatosAsesoriasAcademicas)


export default router