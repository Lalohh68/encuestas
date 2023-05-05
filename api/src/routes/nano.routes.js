import {Router} from "express";
import { methods as nanoController } from "../controllers/nano.controller.js"

const router=Router();

router
.get("/clubes", nanoController.consultarDatosClubes)
.get("/control_escolar", nanoController.consultarDatosControlEscolar)
.get("/tutorias", nanoController.consultarDatosTutorias)
.get("/biblioteca", nanoController.consultarDatosBiblioteca)
.get("/centro_de_computo", nanoController.consultarDatosCentroDeComputo)
.get("/servicio_social", nanoController.consultarDatosServicioSocial)
.get("/residencias", nanoController.consultarDatosResidencias)
.get("/idiomas", nanoController.consultarDatosIdiomas)
.get("/cafeteria_1", nanoController.consultarDatosCafeteria1)
.get("/cafeteria_2", nanoController.consultarDatosCafeteria2)
.get("/cajas", nanoController.consultarDatosCajas)
.get("/coordinador_de_carreras", nanoController.consultarDatosCoordinadorDeCarreras)
.get("/becas", nanoController.consultarDatosBecas)
.get("/centro_de_copiado", nanoController.consultarDatosCentroDeCopiado)
.get("/psicologico", nanoController.consultarDatosPsicologico)
.get("/medico", nanoController.consultarDatosMedico)
.get("/asesorias_academicas", nanoController.consultarDatosAsesoriasAcademicas)


export default router