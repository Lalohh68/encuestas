import { getConnection } from "./../database/db";

async function consultarDatosClubes() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id_clubes) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.clubes where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.clubes where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.clubes where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.clubes where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.clubes where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.clubes where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.clubes where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.clubes where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.clubes;`); 
      return await result
  }

  async function consultarDatosControlEscolar() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.control_escolar where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.control_escolar where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.control_escolar where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.control_escolar where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.control_escolar where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.control_escolar where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.control_escolar where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.control_escolar where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.control_escolar;`); 
      return await result
  }

  async function consultarDatosTutorias() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.tutorias where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.tutorias where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.tutorias where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.tutorias where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.tutorias where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.tutorias where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.tutorias where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.tutorias where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.tutorias;`); 
      return await result
  }

  async function consultarDatosBiblioteca() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.biblioteca where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.biblioteca where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.biblioteca where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.biblioteca where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.biblioteca where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.biblioteca where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.biblioteca where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.biblioteca where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.biblioteca;`); 
      return await result
  }

  async function consultarDatosCentroDeComputo() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.centro_computo where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.centro_computo where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.centro_computo where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.centro_computo where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.centro_computo where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.centro_computo where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.centro_computo where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.centro_computo where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.centro_computo;`); 
      return await result
  }

  async function consultarDatosServicioSocial() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.servicio_social where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.servicio_social where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.servicio_social where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.servicio_social where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.servicio_social where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.servicio_social where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.servicio_social where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.servicio_social where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.servicio_social;`); 
      return await result
  }

export {
    consultarDatosClubes,
    consultarDatosControlEscolar,
    consultarDatosTutorias,
    consultarDatosBiblioteca,
    consultarDatosCentroDeComputo,
    consultarDatosServicioSocial
}