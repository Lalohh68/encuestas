import {Router} from "express";
import { methods as bioquimicaController } from "../controllers/bioquimica.controller"

const router=Router();

router
.get("/clubes", bioquimicaController.consultarDatosClubes)
.get("/control_escolar", bioquimicaController.consultarDatosControlEscolar)
.get("/tutorias", bioquimicaController.consultarDatosTutorias)
.get("/biblioteca", bioquimicaController.consultarDatosBiblioteca)
.get("/centro_de_computo", bioquimicaController.consultarDatosCentroDeComputo)
.get("/servicio_social", bioquimicaController.consultarDatosServicioSocial)
.get("/residencias", bioquimicaController.consultarDatosResidencias)
.get("/idiomas", bioquimicaController.consultarDatosIdiomas)
.get("/cafeteria_1", bioquimicaController.consultarDatosCafeteria1)
.get("/cafeteria_2", bioquimicaController.consultarDatosCafeteria2)
.get("/cajas", bioquimicaController.consultarDatosCajas)
.get("/coordinador_de_carreras", bioquimicaController.consultarDatosCoordinadorDeCarreras)
.get("/becas", bioquimicaController.consultarDatosBecas)
.get("/centro_de_copiado", bioquimicaController.consultarDatosCentroDeCopiado)
.get("/psicologico", bioquimicaController.consultarDatosPsicologico)
.get("/medico", bioquimicaController.consultarDatosMedico)
.get("/asesorias_academicas", bioquimicaController.consultarDatosAsesoriasAcademicas)


export default router