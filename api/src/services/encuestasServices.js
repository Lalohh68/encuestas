import { getConnection } from "./../database/db.js";

async function consultarFolio(numControl) {
 
  const connection = await getConnection();
    const result = await connection.query(
    "SELECT id_alumno FROM alumnos where num_control=?",numControl); //and folio IS NOT NULL
    return await result
}
async function consultarId(numControl) {
 
  const connection = await getConnection();
    const result = await connection.query(
    "SELECT id_alumno FROM alumnos where num_control=? ",numControl);
    return await result
}

async function registrarAlumno(numControl,carrera) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO alumnos (num_control, carrera) VALUES ('${numControl}', '${carrera}');` );
  return await result
}

async function createEncuestaBecas(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO becas (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaAsesoriasAcademicas(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO asesorias_academicas (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaBiblioteca(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO biblioteca (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaCafeteria1(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO cafeteria_1 (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaCafeteria2(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO cafeteria_2 (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaCajas(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO cajas (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaCentroComputo(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO centro_computo (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaCentroCopiado(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO centro_copiado (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaClubes(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO clubes (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaControlEscolar(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO control_escolar (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaCoordinadorCarreras(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO coordinador_carreras (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaIdiomas(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO idiomas (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaMedico(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO medico (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaPsicologico(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO psicologico (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaResidencias(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO residencias (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaServicioSocial(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO servicio_social (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}

async function createEncuestaTutorias(idAlumno,horario,disponibilidad,atencion,amabilidad,comentarios) {
 
  const connection = await getConnection();
    const result = await connection.query(
    `INSERT INTO tutorias (id_alumno, horario, disponibilidad_personal, atencion_personal, amabilidad_personal,comentarios) VALUES ('${idAlumno}', '${horario}', '${disponibilidad}', '${atencion}', '${amabilidad}','${comentarios}');`);
  return result;
}


export { consultarFolio, consultarId, registrarAlumno, createEncuestaBecas,createEncuestaAsesoriasAcademicas,createEncuestaBiblioteca,createEncuestaCafeteria1,createEncuestaCafeteria2,createEncuestaCajas,createEncuestaCentroComputo,createEncuestaCentroCopiado,createEncuestaClubes,createEncuestaCoordinadorCarreras,createEncuestaIdiomas,createEncuestaMedico,createEncuestaPsicologico,createEncuestaResidencias,createEncuestaServicioSocial,createEncuestaTutorias,createEncuestaControlEscolar };
