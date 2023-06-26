import {Router} from "express";
import { methods as adminController } from "../controllers/adminControllers.js"

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
.get("/alumnos", adminController.consultarAlumnos)
.get("/total", adminController.consultarTotalAlumnos)

.get("/clubes/comentarios", adminController.consultarComentariosClubes)
.get("/control_escolar/comentarios", adminController.consultarComentariosControlEscolar)
.get("/tutorias/comentarios", adminController.consultarComentariosTutorias)
.get("/biblioteca/comentarios", adminController.consultarComentariosBiblioteca)
.get("/centro_de_computo/comentarios", adminController.consultarComentariosCentroDeComputo)
.get("/servicio_social/comentarios", adminController.consultarComentariosServicioSocial)
.get("/residencias/comentarios", adminController.consultarComentariosResidencias)
.get("/idiomas/comentarios", adminController.consultarComentariosIdiomas)
.get("/cafeteria_1/comentarios", adminController.consultarComentariosCafeteria1)
.get("/cafeteria_2/comentarios", adminController.consultarComentariosCafeteria2)
.get("/cajas/comentarios", adminController.consultarComentariosCajas)
.get("/coordinador_de_carreras/comentarios", adminController.consultarComentariosCoordinadorDeCarreras)
.get("/becas/comentarios", adminController.consultarComentariosBecas)
.get("/centro_de_copiado/comentarios", adminController.consultarComentariosCentroDeCopiado)
.get("/psicologico/comentarios", adminController.consultarComentariosPsicologico)
.get("/medico/comentarios", adminController.consultarComentariosMedico)
.get("/asesorias_academicas/comentarios", adminController.consultarComentariosAsesoriasAcademicas)

export default router