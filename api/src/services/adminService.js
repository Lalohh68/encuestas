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
  async function consultarDatosResidencias() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.residencias where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.residencias where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.residencias where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.residencias where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.residencias where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.residencias where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.residencias where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.residencias where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.residencias;`); 
      return await result
  }
  async function consultarDatosIdiomas() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.idiomas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.idiomas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.idiomas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.idiomas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.idiomas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.idiomas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.idiomas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.idiomas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.idiomas;`); 
      return await result
  }
  async function consultarDatosCafeteria2() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.cafeteria_2 where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.cafeteria_2 where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.cafeteria_2 where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.cafeteria_2 where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.cafeteria_2 where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.cafeteria_2 where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.cafeteria_2 where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.cafeteria_2 where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.cafeteria_2;`); 
      return await result
  }
  async function consultarDatosCafeteria1() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.cafeteria_1 where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.cafeteria_1 where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.cafeteria_1 where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.cafeteria_1 where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.cafeteria_1 where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.cafeteria_1 where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.cafeteria_1 where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.cafeteria_1 where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.cafeteria_1;`); 
      return await result
  }
  async function consultarDatosCajas() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.cajas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.cajas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.cajas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.cajas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.cajas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.cajas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.cajas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.cajas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.cajas;`); 
      return await result
  }
  async function consultarDatosCoordinadorDeCarreras() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.coordinador_carreras where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.coordinador_carreras where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.coordinador_carreras where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.coordinador_carreras where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.coordinador_carreras where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.coordinador_carreras where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.coordinador_carreras where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.coordinador_carreras where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.coordinador_carreras;`); 
      return await result
  }
  async function consultarDatosBecas() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.becas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.becas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.becas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.becas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.becas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.becas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.becas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.becas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.becas;`); 
      return await result
  }
  async function consultarDatosCentroDeCopiado() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.centro_copiado where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.centro_copiado where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.centro_copiado where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.centro_copiado where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.centro_copiado where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.centro_copiado where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.centro_copiado where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.centro_copiado where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.centro_copiado;`); 
      return await result
  }
  async function consultarDatosPsicologico() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.psicologico where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.psicologico where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.psicologico where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.psicologico where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.psicologico where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.psicologico where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.psicologico where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.psicologico where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.psicologico;`); 
      return await result
  }
  async function consultarDatosMedico() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.medico where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.medico where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.medico where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.medico where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.medico where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.medico where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.medico where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.medico where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.medico;`); 
      return await result
  }
  async function consultarDatosAsesoriasAcademicas() {
    const connection = await getConnection();
    const result = await connection.query(
        `SELECT COUNT(id) AS total, (SELECT COUNT(horario)  FROM encuesta_servicios.asesorias_academicas where horario = "Satisfecho") AS horario_satisfechos, (SELECT COUNT(horario)  FROM encuesta_servicios.asesorias_academicas where horario = "No satisfecho") AS horario_no_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.asesorias_academicas where disponibilidad_personal = "Satisfecho") AS disponibilidad_satisfechos,(SELECT COUNT(disponibilidad_personal)  FROM encuesta_servicios.asesorias_academicas where disponibilidad_personal = "No satisfecho") AS disponibilidad_no_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.asesorias_academicas where atencion_personal = "Satisfecho") AS atencion_satisfechos, (SELECT COUNT(atencion_personal)  FROM encuesta_servicios.asesorias_academicas where atencion_personal = "No satisfecho") AS atencion_no_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.asesorias_academicas where amabilidad_personal = "Satisfecho") AS amabilidad_satisfechos,(SELECT COUNT(amabilidad_personal)  FROM encuesta_servicios.asesorias_academicas where amabilidad_personal = "No satisfecho") AS amabilidad_no_satisfechos FROM encuesta_servicios.asesorias_academicas;`); 
      return await result
  }

export {
    consultarDatosClubes,
    consultarDatosControlEscolar,
    consultarDatosTutorias,
    consultarDatosBiblioteca,
    consultarDatosCentroDeComputo,
    consultarDatosServicioSocial,
    consultarDatosResidencias,
    consultarDatosIdiomas,
    consultarDatosCafeteria1,
    consultarDatosCafeteria2,
    consultarDatosCajas,
    consultarDatosCoordinadorDeCarreras,
    consultarDatosBecas,
    consultarDatosCentroDeCopiado,
    consultarDatosPsicologico,
    consultarDatosMedico,
    consultarDatosAsesoriasAcademicas
}