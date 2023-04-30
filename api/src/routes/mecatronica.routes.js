import {Router} from "express";
import { methods as mecatronicaController } from "../controllers/mecatronica.controller"

const router=Router();

router
.get("/clubes", mecatronicaController.consultarDatosClubes)
.get("/control_escolar", mecatronicaController.consultarDatosControlEscolar)
.get("/tutorias", mecatronicaController.consultarDatosTutorias)
.get("/biblioteca", mecatronicaController.consultarDatosBiblioteca)
.get("/centro_de_computo", mecatronicaController.consultarDatosCentroDeComputo)
.get("/servicio_social", mecatronicaController.consultarDatosServicioSocial)
.get("/residencias", mecatronicaController.consultarDatosResidencias)
.get("/idiomas", mecatronicaController.consultarDatosIdiomas)
.get("/cafeteria_1", mecatronicaController.consultarDatosCafeteria1)
.get("/cafeteria_2", mecatronicaController.consultarDatosCafeteria2)
.get("/cajas", mecatronicaController.consultarDatosCajas)
.get("/coordinador_de_carreras", mecatronicaController.consultarDatosCoordinadorDeCarreras)
.get("/becas", mecatronicaController.consultarDatosBecas)
.get("/centro_de_copiado", mecatronicaController.consultarDatosCentroDeCopiado)
.get("/psicologico", mecatronicaController.consultarDatosPsicologico)
.get("/medico", mecatronicaController.consultarDatosMedico)
.get("/asesorias_academicas", mecatronicaController.consultarDatosAsesoriasAcademicas)


export default router