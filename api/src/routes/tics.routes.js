import {Router} from "express";
import { methods as ticsController } from "../controllers/ticsController.js"

const router=Router();

router
.get("/clubes", ticsController.consultarDatosClubes)
.get("/control_escolar", ticsController.consultarDatosControlEscolar)
.get("/tutorias", ticsController.consultarDatosTutorias)
.get("/biblioteca", ticsController.consultarDatosBiblioteca)
.get("/centro_de_computo", ticsController.consultarDatosCentroDeComputo)
.get("/servicio_social", ticsController.consultarDatosServicioSocial)
.get("/residencias", ticsController.consultarDatosResidencias)
.get("/idiomas", ticsController.consultarDatosIdiomas)
.get("/cafeteria_1", ticsController.consultarDatosCafeteria1)
.get("/cafeteria_2", ticsController.consultarDatosCafeteria2)
.get("/cajas", ticsController.consultarDatosCajas)
.get("/coordinador_de_carreras", ticsController.consultarDatosCoordinadorDeCarreras)
.get("/becas", ticsController.consultarDatosBecas)
.get("/centro_de_copiado", ticsController.consultarDatosCentroDeCopiado)
.get("/psicologico", ticsController.consultarDatosPsicologico)
.get("/medico", ticsController.consultarDatosMedico)
.get("/asesorias_academicas", ticsController.consultarDatosAsesoriasAcademicas)


export default router