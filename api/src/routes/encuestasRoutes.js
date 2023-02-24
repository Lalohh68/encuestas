import {Router} from "express";
import { methods as encuestasController } from "../controllers/encuestasControllers";

const router=Router();

router
.put("/folio", encuestasController.consultarFolio)
.put("/alumno", encuestasController.registrarAlumno)
.put("/becas", encuestasController.CrearEncuestaBecas)
.put("/asesorias", encuestasController.CrearEncuestaAsesorias)
.put("/biblioteca", encuestasController.CrearEncuestaBiblioteca)
.put("/cafeteria1", encuestasController.CrearEncuestaCafeteria1)
.put("/cafeteria2", encuestasController.CrearEncuestaCafeteria2)
.put("/cajas", encuestasController.CrearEncuestaCajas)
.put("/centroComputo", encuestasController.CrearEncuestaCentroComputo)
.put("/centroCopiado", encuestasController.CrearEncuestaCentroCopiado)
.put("/clubes", encuestasController.CrearEncuestaClubes)
.put("/controlEscolar", encuestasController.CrearEncuestaControlEscolar)
.put("/coordinadorCarreras", encuestasController.CrearEncuestaCoordinadorCarreras)
.put("/idiomas", encuestasController.CrearEncuestaIdiomas)
.put("/medico", encuestasController.CrearEncuestaMedico)
.put("/psicologico", encuestasController.CrearEncuestaPsicologico)
.put("/residencias", encuestasController.CrearEncuestaResidencias)
.put("/servicioSocial", encuestasController.CrearEncuestaServicioSocial)
.put("/tutorias", encuestasController.CrearEncuestaTutorias)


export default router;