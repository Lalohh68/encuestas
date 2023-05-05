import {Router} from "express";
import { methods as gestionController } from "../controllers/gestion.controller.js"

const router=Router();

router
.get("/clubes", gestionController.consultarDatosClubes)
.get("/control_escolar", gestionController.consultarDatosControlEscolar)
.get("/tutorias", gestionController.consultarDatosTutorias)
.get("/biblioteca", gestionController.consultarDatosBiblioteca)
.get("/centro_de_computo", gestionController.consultarDatosCentroDeComputo)
.get("/servicio_social", gestionController.consultarDatosServicioSocial)
.get("/residencias", gestionController.consultarDatosResidencias)
.get("/idiomas", gestionController.consultarDatosIdiomas)
.get("/cafeteria_1", gestionController.consultarDatosCafeteria1)
.get("/cafeteria_2", gestionController.consultarDatosCafeteria2)
.get("/cajas", gestionController.consultarDatosCajas)
.get("/coordinador_de_carreras", gestionController.consultarDatosCoordinadorDeCarreras)
.get("/becas", gestionController.consultarDatosBecas)
.get("/centro_de_copiado", gestionController.consultarDatosCentroDeCopiado)
.get("/psicologico", gestionController.consultarDatosPsicologico)
.get("/medico", gestionController.consultarDatosMedico)
.get("/asesorias_academicas", gestionController.consultarDatosAsesoriasAcademicas)


export default router